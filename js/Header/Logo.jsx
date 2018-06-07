import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { string } from 'prop-types'
import GitHubLogo from '../Svg/Svg'

const StyledLogo = styled.svg`
fill: #fff;
flex: 1;

`
const StyledNavLink = styled(NavLink)`
flex: 0.1;
display: flex;
align-items: center;
justify-content: center;
`

const Logo = (props) => (
    <StyledNavLink  to={props.directory}>
    <StyledLogo height="40" width="40" viewBox="0 0 16 16">
       <GitHubLogo />
    </StyledLogo>
    </StyledNavLink> 
)

Logo.propTypes = {
    directory: string.isRequired,
}

export default Logo