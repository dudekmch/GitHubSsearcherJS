import React from 'react'
import styled from 'styled-components';
import NavItem from './NavItem'

const NavSectionStyled = styled.div`
border: solid 2px black;
flex-basis: 15%;
`

const NavSection = () => (
    <NavSectionStyled>
    <ul>
        <NavItem title={"Home"} directory={"/"} />
        <NavItem title={"Search User"} directory={"/searchUser"} />
        <NavItem title={"Search Repository"} directory={"/searchRepository"} />
    </ul>
    </NavSectionStyled>
)

export default NavSection;
