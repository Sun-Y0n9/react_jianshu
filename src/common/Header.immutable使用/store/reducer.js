import * as actionTypes from './actionTypes.js';
import { fromJS } from 'immutable';
const defaultState = fromJS({
	inputFocus: false
});
export default (state = defaultState, action) => {
	if (action.type === actionTypes.CHANGE_SEARCH_FOCUS_TRUE) {
		let newState = state.set('inputFocus', true);
		return newState;
	}
	if (action.type === actionTypes.CHANGE_SEARCH_FOCUS_FALSE) {
		let newState = state.set('inputFocus', false);
		return newState;
	}
	return state
};
