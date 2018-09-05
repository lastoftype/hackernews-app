import styled from 'styled-components'
import media from 'styled-media-query'

import SideNavLink from './SideNavLink'

const SideNav = styled.nav`
	display: none;
	flex: 0 0 150px;
	padding: 7.5px;
	
	${media.greaterThan('medium')`
		display: block;
	 `}

	 a {
	 	display: block;
	 }
`

export default (props) => (
	<SideNav {...props}>
		<SideNavLink href="asd">Top stories</SideNavLink>
		<SideNavLink href="asd">Favorites</SideNavLink>
	</SideNav>
	)