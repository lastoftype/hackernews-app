import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'
import moment from 'moment'

const TimestampWrapper = styled.div`
	opacity: 0.5;
	font-size: 0.7em;
	margin: 0 0 0.1em;
`

const Timestamp = ({time, ...props}) => (
	<TimestampWrapper {...props}>{moment.unix(time).fromNow()}</TimestampWrapper>
	)

Timestamp.propTypes = {
	time: PropTypes.number
}

export default Timestamp