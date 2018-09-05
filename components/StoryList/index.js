import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Story from '../Story'
import { Row } from '../Layout'
import LastUpdated from '../LastUpdated'
import StorySchema from '../../lib/schema'

const StoryListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: -7.5px;
	flex: 1 1 0;
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

		const { stories, title } = this.props

		return (
			<StoryListWrapper {...this.props}>
				<Row spaceBetween alignItems="flex-end">
					<StoryTitle>{title}</StoryTitle>
					<LastUpdated date={this.props.lastUpdated} />
				</Row>
				<Row>
				{	
					stories && 
					stories.length && 
					stories.map(({by, title, id, time, url, score}, i) => (
							<Story
								by={by}
								title={title}
								id={id}
								score={score}
								time={time}
								url={url}
								active={score > 140}
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