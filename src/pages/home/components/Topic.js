import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { 
	TopicWrapper,
	TopicItem,
	MoreTopic
} from '../style'
class Topic extends Component {
	render () {
		return (
			<TopicWrapper>
				{this.createTopicJSX()}
				<MoreTopic>
					<span>更多热门专题</span>
					<span className="iconfont icon-wjjiantou"></span>
				</MoreTopic>
			</TopicWrapper>
		)
	}
	createTopicJSX () {
		const { topicList } = this.props;
		if (topicList.size === 0) return;
		return topicList.map((e) => {
			return (
				<TopicItem title={e.get('title')} key={e.get('id')}>
					<img alt={e.get('title')} className='topic-pic' src={e.get('imgUrl')} />
					{e.get('title')}
				</TopicItem>
			)
		});
	}
	componentDidMount () {
		const { getTopicList } = this.props;
		getTopicList();
	}
};
const mapStateToProps = (state) => {
	return {
		topicList: state.getIn(['home', 'topicList']),
		articleList: state.getIn(['home', 'articleList'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getTopicList () {
			dispatch(actionCreator.getHomeListAction());
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (Topic);