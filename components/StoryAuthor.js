import PropTypes from 'prop-types'
import styled from 'styled-components'

const StoryAuthorSpan = styled.span`
  font-size: 0.7em;
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  color: black;
`

const StoryAuthor = ({ author }) => <StoryAuthorSpan>{author}</StoryAuthorSpan>

StoryAuthor.propTypes = {
  author: PropTypes.string
}

export default StoryAuthor
