import { fromJS } from 'immutable';
import axios from 'axios';
import * as actionTypes from './actionTypes';
export const setTopicListAction = (list) => {
	return {
		type: actionTypes.GET_TOPIC_LIST,
		list: fromJS(list)
	}
};

export const getHomeListAction = (list) => {
	return (dispatch) => {
		axios.get('/api/home.json')
			.then(res => {
				if (res.data.success) {
					dispatch(setTopicListAction(res.data.data.topicList || []))
					dispatch(setListListAction(res.data.data.articleList || []))
					dispatch(setRecommendListAction(res.data.data.recommendList || []))
					dispatch(setAuthorListAction(res.data.data.authorLost || []))
				}
			})
			.catch(err => {
				console.log(err);
			})
	}
};
export const setListListAction = (list) => {
	return {
		type: actionTypes.GET_LIST_LIST,
		list: fromJS(list)
	}
};
export const setRecommendListAction = (list) => {
	return {
		type: actionTypes.GET_RECOMMEND_LIST,
		list: fromJS(list)
	}
};
export const setAuthorListAction = (list) => {
	return {
		type: actionTypes.GET_AUTHOR_LIST,
		list: fromJS(list)
	}
};
