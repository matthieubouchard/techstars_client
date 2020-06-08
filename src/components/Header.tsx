import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

import ROUTES from '../router/routes'

const NavContainer = styled.nav.attrs({ className: 'flex items-center justify-between bg-blue-700 p-6 mb-5' })`
  position: absolute;
  top: 0;
  left: 0;
  max-height: 80px;
  width: 100%;
`
const LogoContainer = styled.nav.attrs({ className: 'flex items-center flex-shrink-0 text-white mr-6' })`
  span {
    ${tw`mr-4`}
  }
  a {
    ${tw`block inline-block mt-0 text-teal-200 hover:text-white mr-4`}
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to={ROUTES.companies}>
        <LogoContainer>
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="font-semibold text-xl tracking-tight">Companies Together</span>
        </LogoContainer>
      </Link>
    </NavContainer>
  )
}

export default Header