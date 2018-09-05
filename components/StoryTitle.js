import media from 'styled-media-query'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StoryTitleWrapper = styled.h1`
	font-size: ${props => parseInt(props.score, 10) > 250 ? '1.3em' : '1.15em'};
	font-weight: bold;
	line-height: 1.2;
	margin: 0 0 1em;
	-webkit-font-smoothing: antialiased;
	font-smooth: antialiased;
	background: #000;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	max-width: 93%;

	a {
		text-decoration: none;
	}
`

const StoryTitle = ({title, url, score, children, ...props}) => (
	<StoryTitleWrapper>
		<a href={url}>{title}</a>
	</StoryTitleWrapper>
	)

StoryTitle.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
	score: PropTypes.number
}

export default StoryTitle