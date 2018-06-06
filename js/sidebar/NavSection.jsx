import React from 'react'
import NavItem from './NavItem'

const NavSection = () => (
    <ul>
        <NavItem title={"Test"} directory={"/test"} />
        <NavItem title={"Test2"} directory={"/test2"} />
    </ul>
)

export default NavSection;
