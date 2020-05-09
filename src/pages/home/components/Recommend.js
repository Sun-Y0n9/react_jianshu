
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	RecommendWrapper
} from '../style';
class Recommend extends Component {
	render () {
		return (
			<RecommendWrapper widthProps='280px'>
				{this.getRecommendImgJSX()}
			</RecommendWrapper>
		)
	}
	getRecommendImgJSX () {
		const { recommendImgList } = this.props;
		if (recommendImgList.size === 0) return;
		return recommendImgList.map((e) => {
			return (
				<a key={e.get('id')} href={e.get('href')}>
					<img alt={e.get('id')} src={require('../../../' + e.get('imgUrl') +'.png')} />
				</a>
			)
		})
	}
};
const mapStateToProps = (state) => {
	return {
		recommendImgList: state.getIn(['home', 'recommendImgList'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (Recommend);