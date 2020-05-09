import React, { Component } from 'react';
import img from '../../../static/img/art.jpg';
import { connect } from 'react-redux';
import { 
	ListWarpper,
	ListItemLeft,
	ListItemRight,
	ListItem,
	ItemMeta
} from '../style'
class List extends Component {
	render () {
		return (
			<ListWarpper>
				{this.getListJSX()}
			</ListWarpper>
		)
	}
	getListJSX () {
		const { articleList } = this.props;
		if (articleList.size === 0) return;
		return articleList.map((e) => {
			return (
				<ListItem className={e.get("imgUrl") ? "item-have-img" : "item-no-img"} key={e.get('id')}>
					<ListItemLeft>
						<a className='title' href='/'>{e.get('title')}</a>
						<div className='centent'>
							<p>{e.get('desc')}</p>
						</div>
						<ItemMeta>
							<div className='diamonds'>
							 	<span className="iconfont icon-diamond"></span>
								 {e.get('diamonds')}
							</div>
							<a href='/' className='author'>
								<span>{e.get('author')}</span>
							</a>	
							<a href='/' className='message'>
							 	<span className="iconfont icon-xinxi"></span>
								 {e.get('message')}
							</a>
							<div className='like'>
								<span className="iconfont icon-xin"></span>
								{e.get('like')}
							</div>
						</ItemMeta>
					</ListItemLeft>
					<ListItemRight className='list-item-right'>
						<a href='/'>
							<img alt={e.get('title')} src={img}></img>
						</a>
					</ListItemRight>
				</ListItem>
			)
		})
	}
};
const mapStateToProps = (state) => {
	return {
		articleList: state.getIn(['home', 'articleList'])
	};
};
const mapDispatchToProps = (dispatch) => {
	return {

	};
};
export default connect (mapStateToProps, mapDispatchToProps) (List);