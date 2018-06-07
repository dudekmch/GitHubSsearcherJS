import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import PageTitle from "./PageTitle";
import LoggedUserName from "./LoggedUserName";

const HeaderContainer = styled.div`
background-color: #25292E;
display: flex;
`;

const HeaderView = () => (
  <HeaderContainer>
    <Logo directory={"/"} />
    <PageTitle />
    <LoggedUserName />
  </HeaderContainer>
);

export default HeaderView;
