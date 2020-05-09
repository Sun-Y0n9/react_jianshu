import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	WriterWrapper
} from '../style';
class Writer extends Component {
	constructor (props) {
		super(props);
		this.changeAuthors= this.changeAuthors.bind(this);
	}
	render () {
		return (
			<WriterWrapper>
				<div className='topTitle'>
					<span className='text'>推荐作者</span>
					<span className='changeAuthor' onClick={(e) => { this.changeAuthors(this.refreshDom, e) }}>
						<span ref={(refresh) => this.refreshDom = refresh} className='iconfont icon-shuaxin'></span>
						换一换
					</span>
				</div>
				<ul>
					{this.getAuthorListJSX()}
				</ul>
				<div className='bottom'>
					<button>
						查看全部
						<span className="iconfont icon-wjjiantou"></span>
					</button>
				</div>
			</WriterWrapper>
		)
	}
	getAuthorListJSX () {
		let { authorList } = this.props;
		if (authorList.size === 0) return;
		return authorList.map(e => {
			return (
				<li key={e.get('id')}>
					<div className='headPortrait'>
						<a href={e.get('authorPage')}>
							<img alt='' src={require('../../../static/img/touxiang.webp')} />
							{/* <img src={e.get('imgUrl')} /> */}
						</a>
					</div>
					<div className='authorInfo'>
						<div className='top'>
							<a href={e.get('authorPage')}>{e.get('name')}</a>
							<span>
								<span className='iconfont icon-jia'></span>
								关注
							</span>
						</div>
						<div className='bot'>
							<span>写了{e.get('writeCount')}字</span>
							<span>{e.get('likeCount')}喜欢</span>
						</div>
					</div>
				</li>
			)
		})
	}
	changeAuthors (dom) {
		let ori = dom.style.transform;
		let angle = ori.replace(/[^0-9]/gi, '');
		console.log(angle);
		dom.style.transform = 'rotateZ(' + (Number(angle) + 360 )+ 'deg)';
	}
};
const mapStateToProps = (state) => {
	return {
		authorList: state.getIn(['home', 'authorList'])
	};
};
const mapDispatchToProps = (dispatch) => {
	return {

	};
};
export default connect(mapStateToProps, mapDispatchToProps) (Writer);