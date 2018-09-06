import styled, {keyframes} from 'styled-components'
import ArticleWrapper from './ArticleWrapper'

import delayMounting from '../lib/delay'

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

const StoryEmptyWrapper = styled.article`
  position: absolute;
  flex: 0 1 100%;
  right: 7.5px;
  left: 7.5px;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.15s ease;
  transform: translateY(0);
  background: #e6ebf1;
  /*opacity: 0;*/
  animation: ${props => (props.isMounted ? FadeIn : FadeOut)} 0.15s ease
    forwards;
`

const ArticleEmptyWrapper = ArticleWrapper.extend`
  @media screen and (min-width: 1170px) {
    flex: 0 0 25%;
    width: 25%;
  }
`

const StoryEmpty = ({ className, isMounted, ...props }) => (
  <ArticleEmptyWrapper>
    <StoryEmptyWrapper isMounted={isMounted}>
      No favorites yet!
    </StoryEmptyWrapper>
  </ArticleEmptyWrapper>
  )

export default delayMounting(StoryEmpty)