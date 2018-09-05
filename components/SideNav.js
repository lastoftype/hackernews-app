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
	 	display: flex;
	 	align-items: baseline;
	 	color: #32325d;
	 	text-decoration: none;
	 	margin: 0 0 7.5px;

	 	&:before {
 			position: absolute;
 			left: -10px;
 			top: 0;
 			bottom: 0;
 			width: 1px;
 			height: 1em;
 			margin: auto;
 			background: #199365;
 			border-radius: 30px;
 			content: ' ';
 			display: block;
 			opacity: 0;
 			transition: all .15s ease;
 		}

	 	&.active {
	 		position: relative;

	 		&:before {
	 			opacity: 1;
	 		}
	 	}

	 	&:hover {
	 		color: #242456;
	 	}

	 	span {
	 		font-size: 0.85em;
	 		margin-left: 40px;
	 		opacity: 0.4;
	 	}
	 }
`

export default ({favoriteCount}) => (
	<SideNav>
		<SideNavLink href="/" prefetch><a>Top stories</a></SideNavLink>
		<SideNavLink href="/favorites" prefetch><a>Favorites<span>{favoriteCount > 0 ? favoriteCount : ''}</span></a></SideNavLink>
	</SideNav>
	)