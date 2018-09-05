import PropTypes from 'prop-types'
import styled,{keyframes} from 'styled-components'
import media from 'styled-media-query'
import domain from 'getdomain'
import colormap from 'colormap'

let customMap = [
	{'index':0,'rgb':[152,164,177]},
	{'index':0.6,'rgb':[255, 155, 124]},
	{'index':1,'rgb':[255, 155, 124]}
]

let colors = colormap({
    colormap: customMap,
    nshades: 5,
    format: 'hex',
    alpha: 1
})

const getColor = (s) => {
	const score = parseInt(s, 10);
	const perc = Math.floor(score / 400 * 10 / 2);
	return colors[perc] || colors[0];
}

const FadeIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 0.8;
	}
`

const Score = styled.div`
	font-size: 0.7em;
	color: ${props => getColor(props.score)};
	opacity: 0;
	animation: ${FadeIn} 150ms ease 500ms forwards;
`

const StoryScore = ({score}) => <Score score={score}>{score}</Score>

StoryScore.propTypes = {
	score: PropTypes.number
}

export default StoryScore