import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Story from '../Story'
import { Row } from '../Layout'
import LastUpdated from '../LastUpdated'
import Loading from '../Loading'

import StorySchema from '../../lib/schema'

const StoryListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: -7.5px;
	flex: 1 1 0;
	padding-bottom: 100px
`

const StoryTitle = styled.h1`
	font-size: 1.5em;
	font-weight: normal;
	padding: 7.5px;
	color: #24b47e;
	line-height: 1;
`

class StoryList extends React.Component {

	static propTypes = {
		stories: PropTypes.arrayOf(PropTypes.shape(StorySchema)),
		lastUpdated: PropTypes.number
	}

	constructor(props) {
		super(props)
	}

	render() {

		const { stories, title, loading } = this.props

		return (
			<StoryListWrapper {...this.props}>
				<Row spaceBetween alignItems="flex-end">
					<StoryTitle>{title}</StoryTitle>
					<LastUpdated date={this.props.lastUpdated} />
				</Row>
				<Row>
				{
					(loading === true && stories.length < 1) ? <Loading /> : <span></span>
				}
				{	
					stories && 
					stories.length > 0 && 
					stories.map(({by, title, id, time, url, score}, i) => (
							<Story
								by={by}
								title={title}
								id={id}
								score={score}
								time={time}
								url={url}
								key={i} />
						)
					)
				}
				</Row>
			</StoryListWrapper>
			)
	}
}


export default StoryList