import styled, { keyframes } from 'styled-components'
import delayUnmounting from '../lib/delay'

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

const FadeOut = keyframes`
	from {
		opacity: 1;
		transform: translateY(0);
	}

	to {
		opacity: 0;
		transform: translateY(2px);
	}
`

const LoadingWrapper = styled.div`
  position: absolute;
  z-index: 0;
  padding: 7.5px;
  opacity: 0;
  animation: ${props => (props.isMounted ? FadeIn : FadeOut)} 0.15s ease
    forwards;
`

const Loading = ({ isMounted }) => (
  <LoadingWrapper isMounted={isMounted}>Loading...</LoadingWrapper>
)

export default delayUnmounting(Loading)
