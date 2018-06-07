import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import PageTitle from "./PageTitle";
import LoggedUserName from "./LoggedUserName";

const HeaderContainer = styled.div`
background-color: #25292E;
display: flex;
justify-content: center;
`;

const HeaderContentContainer = styled.div`
flex-basis: 80%;
display: flex;
`

const HeaderView = () => (
  <HeaderContainer>
    <HeaderContentContainer>
    <Logo directory={"/"} />
    <PageTitle />
    <LoggedUserName />
    </HeaderContentContainer>
  </HeaderContainer>
);

export default HeaderView;
