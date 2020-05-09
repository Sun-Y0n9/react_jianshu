import React, { Component } from 'react';
import {
	DownloadWrapper
} from '../style';
import code2 from '../../../static/img/2code.png';
class DownLoadCode extends Component {
	constructor (props) {
		super(props);
		this.state = {
			showCode: false
		}
		this.show2Code = this.show2Code.bind(this);
		this.hide2Code = this.hide2Code.bind(this);
	}
	render () {
		return (
			<DownloadWrapper>
				<div className='bigCodeContainer' style={{display: this.state.showCode ? 'block' : 'none'}}>
					<div className='imageContainer'>
						<img alt='' src={code2} />
					</div>
					<span></span>
				</div>
				<a href='/' onMouseEnter={this.show2Code} onMouseLeave={this.hide2Code}>
					<img alt='' src={code2} />
					<div className='downloagInfo'>
						<div>
							下载简书手机App
							<span className="iconfont icon-wjjiantou"></span>
						</div>
						<div>
							随时随地发现和创作内容
						</div>
					</div>
				</a>
			</DownloadWrapper>
		)
	}
	show2Code () {
		this.setState({
			showCode: true
		})
	}
	hide2Code () {
		this.setState({
			showCode: false
		});
	}
}

export default DownLoadCode;