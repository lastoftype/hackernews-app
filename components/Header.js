import styled from 'styled-components'

import Nav from './Nav'
import Logo from './Logo'
import { Container, Row } from './Layout'

const Header = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  width: 100%;
  z-index: 1;
  background: white;
  border-bottom: 2px solid rgba(207, 215, 223, 0.25);
`

export default ({ className, ...props }) => (
  <Header {...props}>
    <Container row>
      <Row>
        <Logo />
        <Nav />
      </Row>
    </Container>
  </Header>
)
