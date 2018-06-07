import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { string } from 'prop-types'

const StyledNavLink = styled(NavLink)`
color: #586069;
font-size: 1.25em;
text-decoration: none;
`;

const StyledNavItem = styled.div`
margin-top: 0.5em;
flex: 1
`

const NavItem = props => (
  <StyledNavItem>
    <StyledNavLink
      exact
      to={props.directory}
      activeStyle={{
        color: "#24292e",
        fontWeight:600,
        borderBottom: '2px solid transparent',
        borderBottomColor: '#e36209',
        transition: '.2s'
      }}
    >
      {props.title}
    </StyledNavLink>
  </StyledNavItem>
);

NavItem.propTypes = {
  directory: string,
  title: string
}

NavItem.defaultProps = {
  directory: '/',
  title: 'N/A'
}

export default NavItem;
