import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from 'styled-media-query'
import domain from 'getdomain'

const ScoreWrapper = styled.div`
	font-size: 0.85em;
	background: #e39f48;
	padding: 10px;
	border-radius: 3px;
`

const Score = ({score, ...props}) => <ScoreWrapper {...props}>{score}</ScoreWrapper>

Score.propTypes = {
	score: PropTypes.number
}

export default Score