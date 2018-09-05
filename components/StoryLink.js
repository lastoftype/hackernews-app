import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'
import domain from 'getdomain'

const StoryLink = styled.a`
	font-size: 0.7em;
	text-decoration: none;
	display: flex;
	align-items: flex-end;
	color: black;
`

export default ({url, title}) => (
	<StoryLink 
		href={url} 
		title={title}>{domain.get(url)}</StoryLink>
	)