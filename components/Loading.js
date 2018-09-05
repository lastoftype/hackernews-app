import styled, {keyframes} from 'styled-components'

const FadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(2px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
`

const LoadingWrapper = styled.div`
	padding: 7.5px;
	opacity: 0;
	animation: ${FadeIn} .15s ease forwards;
`

export default () => (
	<LoadingWrapper>Loading...</LoadingWrapper>
	)