import styled from 'styled-components'
import Link from 'next/link'

const SideNavLink = styled(Link)`
		text-decoration: none;

		a {
			color: orange;
			text-decoration: none;
		}
`

export default ({children, href, ...props}) => (
	<Link href={href}><a>{children}</a></Link>
	)