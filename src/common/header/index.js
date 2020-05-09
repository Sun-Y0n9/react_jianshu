import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { HeaderWrapper, HeaderContent, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchHotInfo, SearchHotInfoTitle, SearchHotInfoToggle, SearchHotInfoList, SearchHotInfoItem } from './style.js';
class Header extends Component {
	constructor (props) {
		super(props);
		this.initHotList = this.initHotList.bind(this);
		this.state = {
			rotate: false
		}
	}
	render () {
		const { inputFocus, mouseEnterHotList, handleSrarchInputFocus, handleSrarchInputBlur, hotList} = this.props;
		return (
			<HeaderWrapper>
				<HeaderContent>
					<Logo />
					<Nav>
						<NavItem className='fl active'>
							<a href='/'>首页</a>
						</NavItem>
						<NavItem className='fl'>下载APP</NavItem>
						<NavItem className='fr'>登录</NavItem>
						<NavItem className='fr Aa'>
							<span className="iconfont icon-Aa"></span>
						</NavItem>
						<SearchWrapper className={inputFocus || mouseEnterHotList ? 'inputFocus' :''}>
							<NavSearch
								onFocus={() => {handleSrarchInputFocus(hotList)}}
								onBlur={handleSrarchInputBlur}></NavSearch>
							<span className="iconfont icon-sousuo"></span>
							{this.getListArea(inputFocus)}
						</SearchWrapper>
					</Nav>
					<Addition>
							<Button className='reg'>注册</Button>
							<Button className='write'>
								<span className="iconfont icon-xiewenzhang"></span>
								写文章
							</Button>
					</Addition>
				</HeaderContent>
			</HeaderWrapper>
		)
	}
	getListArea () {
		const { inputFocus, changeHotList, handleMouseLeaveHot, handleMouseEnterHot, mouseEnterHotList, hotPage, totTotalPage, anmiFlag } = this.props;
		if (inputFocus || mouseEnterHotList) {
			return (
				<SearchHotInfo onMouseEnter={handleMouseEnterHot} onMouseLeave={handleMouseLeaveHot}>
					<SearchHotInfoTitle>
						热门搜索
						<SearchHotInfoToggle onClick={() => changeHotList(hotPage, totTotalPage, this.spinIcon)}>
							<span ref={(icon) => {this.spinIcon = icon}} className={anmiFlag ? 'iconfont icon-shuaxin rotate' : 'iconfont icon-shuaxin'}></span>
							换一批
						</SearchHotInfoToggle>
					</SearchHotInfoTitle>
					<SearchHotInfoList>
						{this.initHotList()}
					</SearchHotInfoList >
				</SearchHotInfo>
			)
		} else {
			return null;
		}
	}
	initHotList () {
		const { hotList, hotPage } = this.props;
		if (hotList.length === 0) return;
		return hotList.slice((hotPage - 1) * 10, hotPage * 10).map((e) => {
			return (
				<SearchHotInfoItem title={e} key={e}>{e}</SearchHotInfoItem>
			)
		})
	}
}

const mapStateToProps = (state) => {
	return {
		// inputFocus: state.header.get('inputFocus')
		// inputFocus: state.get('header').get('inputFocus')
		inputFocus: state.getIn(['header', 'inputFocus']),
		hotList: state.getIn(['header', 'hotList']),
		hotPage: state.getIn(['header', 'hotPage']),
		totTotalPage: state.getIn(['header', 'totTotalPage']),
		anmiFlag: state.getIn(['header', 'anmiFlag']),
		mouseEnterHotList: state.getIn(['header', 'mouseEnterHotList'])
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		handleSrarchInputFocus (list) {
			console.log(list);
			if (list.size === 0) {
				dispatch(actionCreator.getHotListAction());
			}
			dispatch(actionCreator.getSearchFocusAction());
		},
		handleSrarchInputBlur () {
			dispatch(actionCreator.getSearchBlurAction());
		},
		changeHotList (hotPage, totTotalPage, spin) {
			hotPage < totTotalPage
			? dispatch(actionCreator.getHotListChangeAction(hotPage + 1))
			: dispatch(actionCreator.getHotListChangeAction(1));
			let transform = spin.style.transform;
			let angle = transform.replace(/[^0-9]/ig, '');
			spin.style.transform = 'rotateZ(' + (Number(angle) + 360) + 'deg)';
		},
		handleMouseEnterHot () {
			dispatch(actionCreator.getMouseEnterHotAction());
		},
		handleMouseLeaveHot () {
			dispatch(actionCreator.getMouseLeaveHotAction());
		},
	}
};
export default connect(mapStateToProps, mapDispatchToProps) (Header);
