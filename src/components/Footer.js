import styled from 'styled-components';
import logo from '../img/github-logo.svg';

const StyledFooter = styled.footer`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b82f6;
  column-gap: 10px;
`;

const GithubLogo = styled.img`
  width: 25px;
  cursor: pointer;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Built by JPaulDev</p>
      <a href="https://github.com/JPaulDev/cv-creator">
        <GithubLogo src={logo} alt="GitHub Logo" />
      </a>
    </StyledFooter>
  );
}

export default Footer;
