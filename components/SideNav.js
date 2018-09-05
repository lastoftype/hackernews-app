import styled from 'styled-components'
import media from 'styled-media-query'
import Link from 'next/link'

import SideNavLink from './SideNavLink'

const SideNav = styled.nav`
	display: none;
	flex: 0 0 150px;
	padding: 7.5px;
	margin-top: -7.5px;
	font-size: 0.85em;
	
	${media.greaterThan('medium')`
		display: block;
	 `}

	 a {
	 	display: block;
	 	color: #32325d;
	 	text-decoration: none;
	 	margin: 0 0 7.5px;

	 	&:hover {
	 		text-decoration: underline;
	 	}
	 }
`

export default (props) => (
	<SideNav>
		<Link href="asd"><a>Top stories</a></Link>
		<Link href="asd"><a>Favorites</a></Link>
	</SideNav>
	)