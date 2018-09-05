import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'
import moment from 'moment'

const TimestampWrapper = styled.div`
  color: #98a4b1;
  font-size: 0.7em;
  margin: 0 0 0.1em;
`

const StoryTimestamp = ({ time, ...props }) => (
  <TimestampWrapper {...props}>{moment.unix(time).fromNow()}</TimestampWrapper>
)

StoryTimestamp.propTypes = {
  time: PropTypes.number
}

export default StoryTimestamp
