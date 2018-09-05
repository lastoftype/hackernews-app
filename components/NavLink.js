import styled from 'styled-components'
import Link from 'next/link'

const NavLink = styled(Link)`
  flex: 0 0 auto;
  padding: 10px 20px;
`

export default ({ children, href, ...props }) => (
  <NavLink {...props} prefetch href={href}>
    <a>{children}</a>
  </NavLink>
)
