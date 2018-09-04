import Story from '../Story'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import StorySchema from '../../lib/schema'

const StoryList = ({stories, className, ...props}) => (
	<ul {...props} className={classNames('story-list', className)}>
		{	
			stories && 
			stories.length  && 
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
	</ul>
	)

StoryList.propTypes = {
	stories: PropTypes.arrayOf(PropTypes.shape(StorySchema))
}

export default StoryList