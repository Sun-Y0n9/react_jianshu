import * as actionTypes from './actionTypes.js';
import axios from 'axios';
import { fromJS } from 'immutable';
const initHotListDataAction = (list) => {
	return {
		type: actionTypes.INIT_HOT_LIST_PAGE,
		list: fromJS(list),
		totTotalPage: Math.ceil(list.length / 10)
	}
}
export const getSearchFocusAction = () => {
	return {
		type: actionTypes.CHANGE_SEARCH_FOCUS_TRUE
	}
}
export const getSearchBlurAction = () => {
	return {
		type: actionTypes.CHANGE_SEARCH_FOCUS_FALSE
	}
}
export const getMouseEnterHotAction = () => {
	return {
		type: actionTypes.MOUSE_ENTER_HOT_LIST
	}
}
export const getMouseLeaveHotAction = () => {
	return {
		type: actionTypes.MOUSE_LEAVE_HOT_LIST
	}
}
export const getHotListChangeAction = (page) => {
	return {
		type: actionTypes.HOT_LIST_PAGE_CHANGE,
		page
	}
}

export const getHotListAction = () => {
	return (dispatch) => {
		 axios.get('/api/headerList.json')
		 	.then(res => {
				 if (res.data.success) {
					dispatch(initHotListDataAction(res.data.data))
				 } else {

				 }
			})
			.catch(err => {
				console.log(err);
			})
	}
}