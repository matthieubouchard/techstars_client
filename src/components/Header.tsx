import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

import ROUTES from '../router/routes'

const NavContainer = styled.nav.attrs({ className: 'flex items-center justify-between flex-wrap bg-indigo-500 p-6 mb-5' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`
const LogoContainer = styled.nav.attrs({ className: 'flex items-center flex-shrink-0 text-white mr-6' })``
const LinkContainer = styled.nav.attrs({ className: 'w-full block flex-grow lg:flex lg:items-center lg:w-auto' })`
  a {
    ${tw`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4`}
  }
`
const MobileMenu = styled.div.attrs({ className: 'block lg:hidden' })`
  button {
    ${tw`flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white`}
  }
`


function Header() {
  return (
    <NavContainer>
      <LogoContainer>
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
        <span className="font-semibold text-xl tracking-tight">Connected Towards</span>
      </LogoContainer>
      <LinkContainer>
        <div className="text-sm lg:flex-grow">
          <Link to={ROUTES.companies}>
            Companies
          </Link>
          <Link to={ROUTES.founders}>
            Founders
          </Link>
        </div>
      </LinkContainer>
    </NavContainer>
  )
}

export default Header