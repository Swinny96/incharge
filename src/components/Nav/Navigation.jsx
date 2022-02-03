import React from "react"
import styled from "styled-components"
import NavLink from "../navlink"
import SubNavLink from "../sublink"

const Ul = styled.ul`
  margin: 0px;
  list-style-type: none;
  padding: 0px;

  li {
    display: block;
    width: auto;
    position: relative;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-76%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 50%;
    padding-top: 56px;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`

const Navigation = ({ open }) => {
  return (
    <Ul open={open}>
      <NavLink state="" linkstate="" icon="home" linkname="Welcome" link="/" />
      <NavLink
        state=""
        linkstate=""
        icon="dashboard"
        linkname="Overview"
        link="404"
      />
      <NavLink
        state=""
        linkstate=""
        icon="user"
        linkname="Handsets"
        link="404"
      />
      <NavLink
        state=""
        linkstate=""
        icon="currency-notes-coins"
        linkname="Charges"
        link="404"
      />
      <NavLink
        state=""
        linkstate=""
        icon="usage-calls-cost-volume"
        linkname="Calls"
        link="404"
      />
      <NavLink
        state=""
        linkstate=""
        icon="user"
        linkname="Destinations"
        link="404"
      />
      <div>
        <NavLink
          state="active"
          linkstate="active-link"
          icon="file"
          linkname="Reports"
          link="/"
        />
        <ul className="Sublink-Ul">
          <SubNavLink
            state="active"
            linkstate="active-link"
            linkname="Unbilled"
            link="/"
          />
          <SubNavLink state="" linkstate="" linkname="Billed" link="/" />
        </ul>
      </div>
      <NavLink state="" linkstate="" icon="tag" linkname="Tagging" link="404" />
      <NavLink
        state=""
        linkstate=""
        icon="user-admin"
        linkname="Admin"
        link="404"
      />
      <NavLink
        state=""
        linkstate=""
        icon="download"
        linkname="Downloads"
        link="404"
      />
      <NavLink
        state=""
        linkstate=""
        icon="time"
        linkname="Real Time"
        link="404"
      />
    </Ul>
  )
}

export default Navigation