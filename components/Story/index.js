import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'
import domain from 'getdomain'
import moment from 'moment'

import StoryTimestamp from '../StoryTimestamp'
import StoryLink from '../StoryLink'
import StoryTitle from '../StoryTitle'
import StoryScore from '../StoryScore'
import StoryIcon from '../StoryIcon'
import { Row } from '../Layout'

import { StorySchema } from '../../lib/schema'

const ArticleWrapper = styled.div`
	flex: 0 0 100%;
	width: 100%;
	display: flex;
	padding: 7.5px;

	${media.greaterThan('small')`
	 	flex: 0 0 50%;
	 	width: 50%;
	 `}


	${media.greaterThan('medium')`
	 	flex: 0 0 33.333%;
	 	width: 33.333%;
	 `}


	@media screen and (min-width: 1170px) {
	 	flex: 1 1 ${props => parseInt(props.score, 10) > 250 ? '50%' : '25%'};
		width: ${props => parseInt(props.score, 10) > 250 ? '50%' : '25%'};
	}
`

const Article = styled.article`
	flex: 0 0 100%;
	width: 100%;
	border-radius: 4px;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: all .15s ease;
	box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
	transform: translateY(0);
	background: white;

	/*&:hover {
		transform: translateY(-1px);
    -webkit-box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    cursor: pointer;

    h1 {
    	background: #24b47e;
			background: -webkit-linear-gradient(55deg, #185a9d, #24b47e);
			background: linear-gradient(55deg, #185a9d, #24b47e);
			-webkit-text-fill-color: transparent;
			-webkit-background-clip: text;
	  	transition: all .15s ease;
    }
	}*/
`

class Story extends React.Component {

	static propTypes = {
		...StorySchema
	};

	constructor(props) {
		super(props);
	}

	toggle = () => {
		console.log('toggled')
	}

	render() {

		const { by, title, id, score, time, url, type, active, className } = this.props

		return (
			<ArticleWrapper>
				<Article active={active} score={score}>
					<Row column>
						<Row spaceBetween>
							<StoryTimestamp time={time} />
							<StoryScore score={score} />
						</Row>
						<StoryTitle title={title} url={url} score={score} />
					</Row>
					<Row spaceBetween>
						<StoryLink url={url} title={title} />
						<StoryIcon active={active} onClick={() => this.toggle} />
					</Row>
				</Article>
			</ArticleWrapper>
		);
	}
}

export default Story