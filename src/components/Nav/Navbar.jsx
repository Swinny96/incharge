import React from "react"
import styled from "styled-components"
import Burger from "./Burger"

const Nav = styled.nav`
  display: flex;
  background: white;
  align-self: stretch;
  grid-area: sidebar;
`

const Sidebar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default Sidebar
