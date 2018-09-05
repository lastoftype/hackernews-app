import moment from 'moment'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LastUpdatedHeader = styled.h3`
  opacity: 0.5;
  padding: 7.5px;
  margin: 0;
  line-height: 1;
  font-size: 0.75em;
`

const LastUpdated = ({ date }) => (
  <LastUpdatedHeader>
    Feed last updated {moment.utc(date).fromNow()}
  </LastUpdatedHeader>
)

LastUpdated.propTypes = {
  date: PropTypes.number
}

export default LastUpdated
