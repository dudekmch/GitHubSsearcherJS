import React from 'react'
import NavItem from './NavItem'

const NavSection = () => (
    <ul>
        <NavItem title={"Home"} directory={"/"} />
        <NavItem title={"Search User"} directory={"/searchUser"} />
        <NavItem title={"Search Repository"} directory={"/searchRepository"} />
    </ul>
)

export default NavSection;
