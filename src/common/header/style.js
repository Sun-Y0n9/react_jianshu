import styled from 'styled-components';
import logoPng from '../../static/img/logo.png';

export const HeaderWrapper = styled.div`
	border-bottom: 1px solid #f0f0f0;
`;
export const HeaderContent = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
	min-width: 768px;
    max-width: 1440px;
	margin: 0 auto;
`;
export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background-image: url(${logoPng});
	background-size: 100%;
`;
export const Nav = styled.div`
	margin: 0 auto;
	width: 960px;
	height: 100%;
	padding-right:70px;
	box-sizing: border-box;
`;
export const NavItem = styled.div`
	padding: 0 15px;
	line-height: 56px;
	font-size: 17px;
	color: #333;
	&.fl{
		float: left;
	}
	&.fr{
		float: right;
		color: #969696;
	}
	&.active{
		a{
			color: #ea6f5a
		}
	}
	.icon-Aa{
		font-size: 24px;
	}
`;
export const SearchWrapper = styled.div`
	float: left;
	position: relative;
	display: flex;
	&.inputFocus{
		input{
			width:320px;
			transition: all 0.4s ease;
		}
		.icon-sousuo{
			background-color: #969696;
			color: #fff;
		}
	}
	.icon-sousuo{
		font-size:20px;
		position: absolute;
 		height: 30px;
		width: 30px;
		border-radius:50%;
		right: 5px;
		bottom:4px;
		line-height:30px;
		text-align: center;
		display: inline-block;
	}
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	border-radius: 19px;
	margin-top: 9px;
	padding: 0 35px 0 20px;
	border: none;
	outline: none;
	box-sizing: border-box;
	width: 240px;
	height: 38px;
	background-color: #eee;
	font-size: 14px;
	transition: all 0.4s ease;
	color: #666;
	&::placeholder{
		color: #999;
	}
`;
export const SearchHotInfo = styled.div`
	position: absolute;
	left: 0;
	top: 56px;
	width: 320px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
	z-index: 10;
	background-color: #fff;
	border-radius: 10px;
	padding-bottom: 10px;
`;
export const SearchHotInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	color: #969696;
	line-height: 20px;
	font-size: 14px;
`;
export const SearchHotInfoToggle = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	user-select: none;
	.icon-shuaxin{
		margin-right: 5px;
		transition: all 0.3s linear;
		display: inline-block;
	}
`;
export const SearchHotInfoList = styled.div`
	overflow: hidden;
`;
export const SearchHotInfoItem = styled.a`
	display: block;
	float: left;
	font-size: 13px;
	padding: 0 5px;
	line-height: 20px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
	margin-right: 10px;
	margin-bottom: 10px;
	cursor: pointer;
`;
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
	.icon-xiewenzhang{
		margin-right: 8px;
	}
`;
export const Button = styled.button`
	border: 1px solid #ec6419;
	border-radius: 19px;
	margin-top: 9px;
	height: 38px;
	line-height: 38px;
	padding: 0 20px;
	margin-right: 20px;
	font-size: 14px;
	&.reg{
		color: #ec6149;
		background-color: #fff;
	}
	&.write{
		color: #fff;
		background-color: #ec6149;
	}
`;
export const Addition3 = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
	background-color: green;
`;