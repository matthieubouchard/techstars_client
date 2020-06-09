import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

import ROUTES from '../router/routes'

const NavContainer = styled.nav.attrs({ className: 'flex items-center justify-between bg-blue-700 p-6 mb-5' })`
  position: sticky;
  top: 0;
  left: 0;
  max-height: 80px;
  width: 100%;
`
const LogoContainer = styled.nav.attrs({ className: 'flex items-center flex-shrink-0 text-white mr-6' })`
  span {
    padding-left: 6rem;
  }
  a {
    ${tw`block inline-block mt-0 text-teal-200 hover:text-white mr-4`}
  }
  img {
    position: absolute;
    top: 10px;
    left: 20px;
  }
`

function Header() {
  return (
    <NavContainer>
      <Link to={ROUTES.companies}>
        <LogoContainer>
          <img
            src={
              'https://www.freepnglogos.com/uploads/hot-air-balloon-png/vintage-hot-air-balloon-photography-clipart-panda-37.png'
            }
            width={84}
            height={84}
            alt="logo"
          />
          <span className="font-semibold text-xl tracking-tight">nicecmpny</span>
        </LogoContainer>
      </Link>
    </NavContainer>
  )
}

export default Header
