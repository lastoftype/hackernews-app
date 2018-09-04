import PropTypes from 'prop-types'

export const StorySchema = {
	by: PropTypes.string,
	descendants: PropTypes.number,
	id: PropTypes.number,
	kids: PropTypes.any,
	score: PropTypes.number,
	time: PropTypes.number,
	title: PropTypes.string,
	type: PropTypes.string,
	url: PropTypes.string
}

export default { StorySchema }