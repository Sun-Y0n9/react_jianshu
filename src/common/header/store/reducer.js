import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';
const defaultState = fromJS({
	inputFocus: false,
	hotList: [],
	hotPage: 1,
	totTotalPage: 1,
	mouseEnterHotList: false
});
export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.CHANGE_SEARCH_FOCUS_TRUE:
			return state.set('inputFocus', true);
		case actionTypes.CHANGE_SEARCH_FOCUS_FALSE:
			return state.set('inputFocus', false);
		case actionTypes.INIT_HOT_LIST_PAGE:
			// return state.set('hotList', action.list).set('totTotalPage', action.totTotalPage);
			return state.merge({
				hotList: action.list,
				totTotalPage: action.totTotalPage
			})
		case actionTypes.MOUSE_ENTER_HOT_LIST:
			return state.set('mouseEnterHotList', true);
		case actionTypes.MOUSE_LEAVE_HOT_LIST:
			return state.set('mouseEnterHotList', false);
		case actionTypes.HOT_LIST_PAGE_CHANGE:
			return state.set('hotPage', action.page);
		default:
			return state;
	}
};
