import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { HeaderWrapper, HeaderContent, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';
const Header = (props) => {
	return (
		<HeaderWrapper>
			<HeaderContent>
				<Logo />
				<Nav>
					<NavItem className='fl active'>首页</NavItem>
					<NavItem className='fl'>下载APP</NavItem>
					<NavItem className='fr'>登录</NavItem>
					<NavItem className='fr Aa'>
						<span className="iconfont icon-Aa"></span>
					</NavItem>
					<SearchWrapper className={props.inputFocus ? 'inputFocus' :''}>
						<NavSearch
							onFocus={props.handleSrarchInputFocus}
							onBlur={props.handleSrarchInputBlur}></NavSearch>
						<span className="iconfont icon-sousuo"></span>
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

const mapStateToProps = (state) => {
	return {
		inputFocus: state.header.get('inputFocus')
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		handleSrarchInputFocus () {
			dispatch(actionCreator.getSearchFocusAction());
		},
		handleSrarchInputBlur () {
			dispatch(actionCreator.getSearchBlurAction());
		}
	}
};
export default connect(mapStateToProps, mapDispatchToProps) (Header);
