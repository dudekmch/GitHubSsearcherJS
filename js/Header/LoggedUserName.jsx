import React from "react";
import styled from "styled-components";

const StyleLoggedUserName= styled.span`
color: #fff;
`
const StyledContainerLoggedUserName = styled.div`
flex: 0.2;
align-self: center;
`
const LoggedUserName = () => (
    <StyledContainerLoggedUserName>
        <StyleLoggedUserName>Pawel Dudek</StyleLoggedUserName>
        </StyledContainerLoggedUserName>
)

export default LoggedUserName