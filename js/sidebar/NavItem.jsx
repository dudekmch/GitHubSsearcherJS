import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { string } from 'prop-types'

const StyledNavLink = styled(NavLink)`
color: black;
`;

const NavItem = props => (
  <li>
    <StyledNavLink
      exact
      to={props.directory}
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
    >
      {props.title}
    </StyledNavLink>
  </li>
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
