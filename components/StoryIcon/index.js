import starIconYellow from './images/star-yellow.svg'
import starIconBlack from './images/star-empty.svg'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Icon = styled.button`
	cursor: pointer;
	opacity: 0.75;
	border: 0;
	background: none;
	display: flex;
	justify-content: flex-end;
	padding: 0;
	margin: 0;

	&:focus {
		outline: 0;
	}

	img {
		margin: 0;
		padding: 0;
	}
`

const StoryIcon = ({active, handleClick, ...props}) => (
	<Icon onClick={handleClick()}>
		<img src={active === true ? starIconYellow : starIconBlack} />
	</Icon>
	)

StoryIcon.propTypes = {
	active: PropTypes.bool,
	onClick: PropTypes.func
}

export default StoryIcon