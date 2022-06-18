import styled from 'styled-components';
import logo from '../img/header-logo.svg';

const StyledHeader = styled.header`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  background-color: #3b82f6;
  color: white;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Lobster', cursive;
  font-weight: normal;
  letter-spacing: 2px;
`;

const HeaderLogo = styled.img`
  width: 90px;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderLogo src={logo} alt="A folded CV" />
      <PageTitle>CV CREATOR</PageTitle>
    </StyledHeader>
  );
}

export default Header;
