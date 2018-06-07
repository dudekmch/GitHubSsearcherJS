import React from 'react'
import styled from 'styled-components';
import NavItem from './NavItem'

const StyledItemList = styled.div`
display: flex;
flex-direction: column;
align-content: space-between;
`

const NavSection = () => (
    <StyledItemList>
        <NavItem title={"Home"} directory={"/"} />
        <NavItem title={"Search User"} directory={"/searchUser"} />
        <NavItem title={"Search Repository"} directory={"/searchRepository"} />
    </StyledItemList>
)

export default NavSection;
