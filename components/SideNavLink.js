import React, { Children } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { withRouter } from 'next/router'

const SideNavLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className:
        `/${router.pathname.split("/")[1]}` === props.href ? `active` : null
    })}
  </Link>
));

export default withRouter(SideNavLink)