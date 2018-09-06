import styled, {keyframes} from 'styled-components'
import media from 'styled-media-query'

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

const ArticleWrapper = styled.div`
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  padding: 7.5px;
  opacity: 0;
  animation: ${FadeIn} 0.15s ease forwards 0.15s;

  ${media.greaterThan('small')`
    flex: 0 0 50%;
    width: 50%;
   `} ${media.greaterThan('medium')`
    flex: 0 0 33.333%;
    width: 33.333%;
   `}

  @media screen and (min-width: 1170px) {
    flex: 1 1 ${props => (parseInt(props.score, 10) > 250 ? '50%' : '25%')};
    width: ${props => (parseInt(props.score, 10) > 250 ? '50%' : '25%')};
  }
`

export default ArticleWrapper