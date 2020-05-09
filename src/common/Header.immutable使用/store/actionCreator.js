import * as actionTypes from './actionTypes.js';
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