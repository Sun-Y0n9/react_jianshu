import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendImgList: [],
	authorList: []
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case actionTypes.GET_TOPIC_LIST:
			return state.set('topicList', action.list);
		case actionTypes.GET_LIST_LIST:
			return state.set('articleList', action.list);
		case actionTypes.GET_RECOMMEND_LIST:
			return state.set('recommendImgList', action.list);
		case actionTypes.GET_AUTHOR_LIST:
			return state.set('authorList', action.list);
		default: 
			return state;
	}
}