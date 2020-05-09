import styled from 'styled-components';

// 首页
export const HomeWrapper = styled.div`
	width: 960px;
	height: 400px;
	margin: 0 auto;
`;
export const HomeLeft = styled.div`
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	float:left;
	.banner-img{
		width: 625px;
	}
`;
export const HomeRight = styled.div`
	width: 280px;
	padding-top: 25px;
	float:right;
`;
// 首页-主题
export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	box-sizing: border-box;
	cursor: pointer;
	.topic-pic {
		display: block;
		float: left;
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
`;
export const MoreTopic = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 20px;
	cursor: pointer;
	color: #777;
	.icon-wjjiantou{
		margin-left: 5px;
	}
	&:hover{
		color: #20b1aa;
	}
`;
// 首页-文章推荐
export const ListWarpper = styled.div`
	width: 100%;
`;
export const ListItem = styled.div`
	margin-bottom: 15px;
	padding: 15px 2px 20px 0;
	border-bottom: 1px solid #f0f0f0;
	display: flex;
	&.item-no-img{
		display: block;
		.list-item-right{
			display: none;
		}
	}
`;
export const ItemMeta = styled.div`
	font-size: 12px;
	display: flex;
	align-items: center;
	line-height: 20px;
	a, div{
		margin-right: 10px;
		display: flex;
		align-items: center;
	}
	.diamonds{
		color: #ea6f5a;
		span{
			position: relative;
			top: 1px;
		}
	}
	.author{
		color: #b4b4b4;
		&:hover{
			color: #787878;
		}
	}
	.message{
		color: #b4b4b4;
		&:hover{
			color: #787878;
		}
		span{
			position: relative;
			top: 1px;
		}
	}
	.like{
		color: #b4b4b4;
	}
`;
export const ListItemLeft = styled.div`
	a.title{
		height: 27px;
		margin-bottom: 4px;
		display: block;
		color: rgb(51,51,51);
		font-size: 18px;
		font-weight: bold;
		&:hover{
			text-decoration: underline;
		}
	}
	p{
		margin: 0 0 8px;
		font-size: 13px;
		line-height: 24px;
		color: #999;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
`;
export const ListItemRight = styled.div`
	margin-left: 32px;
	img{
		width: 148px;
	}
`;
// 首页-推荐
export const RecommendWrapper = styled.div`
	width: ${(props) => props.widthProps};
	a{
		width: 100%;
		display: block;	
	}
	img{
		width: 280px;
		margin-bottom: 6px;
		border-radius: 4px;
	}
`;
// 首页-下载
export const DownloadWrapper = styled.div`
	margin-bottom: 30px;
	padding: 10px 22px;
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	background-color: #fff;
	position: relative;
	.bigCodeContainer{
		position: absolute;
		width: 180px;
		height: 180px;
		left: 48px;
		top: -186px;
		.imageContainer{
			position: relative;
			width: 100%;
			background-color: #fff;
			padding: 15px;
			border: 1px solid #999;
			border-radius: 10px;
		}
		img{
			width: 100%;
		}
		span{
			position: absolute;
			left: 80px;
			bottom: -13px;
			transform: rotateZ(45deg);
			color: #999;
			width: 20px;
			height:20px;
			background-color: #fff;
			border: 1px solid #999;
			border-top-color: transparent;
			border-left-color: transparent;
		}
	}
	a{
		display: flex;
		img{
			width: 60px;
			margin-right: 10px;
		}
		.downloagInfo{
			padding-top: 13px;
			font-size: 15px;
		}
		div:nth-child(1) {
			color: #333;
		}
		div:nth-child(2) {
			color: #999;
			font-size: 13px;
		}
	}
`;

export const WriterWrapper = styled.div`
	.topTitle{
		color: #969696;
		display: flex;
		justify-content: space-between;
		font-size: 14px;
    	color: #969696;
		.icon-shuaxin{
			margin-right: 5px;
			font-size: 13px;
			transition: all 0.3s linear;
			display: inline-block;
			transform-origin: center;
			width: 13px;
			height: 13px;
		}
		.changeAuthor{
			cursor: pointer;
			user-select: none;
		}
	}
	li{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 15px;
		.headPortrait{
			overflow: hidden;
			height: 48px;
			width: 48px;
			border-radius: 50%;
			img{
				width: 100%;
			}
		}
		.authorInfo{
			width: calc(100% - 48px);
			padding-left: 10px;
			.top{
				display: flex;
				justify-content: space-between;
				span:nth-child(1){
					color: #333;
					font-size: 14px;
				}
				span:nth-child(2), span.icon-jia{
					font-size: 13px;
    				color: #42c02e;
				}
			}
			.bot{
				font-size: 12px;
				color: #969696;
				span:nth-child(2){
					margin-left: 10px;
				}
			}
		}
	}
	.bottom{
		margin-top: 15px;
		button{
			font-size: 13px;
			color: #787878;
			background-color: #f7f7f7;
			border: 1px solid #dcdcdc;
			border-radius: 4px;
			width: 100%;
			height: 35px;
			.iconfont{
				font-size: 12px;
			}
		}
	}
`;