import classNames from 'classnames'
import PropTypes from 'prop-types'

import { StorySchema } from '../../lib/schema'

const Story = ({by, title, id, score, time, url, type, className, ...props}) => (
	<li {...props} className={classNames('story', className)}>
			<p>by: {by}</p>
			<p>title: {title}</p>
			<p>id: {id}</p>
			<p>score: {score}</p>
			<p>time: {time}</p>
			<p>type: {type}</p>
			<p>url: {url}</p>
	</li>
	)

Story.propTypes = StorySchema

export default Story