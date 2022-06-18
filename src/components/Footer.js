import styled from 'styled-components';
import logo from '../img/github-logo.svg';

const StyledFooter = styled.footer`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3b82f6;
  column-gap: 4px;
  color: white;
  padding: 10px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

const GithubLogo = styled.img`
  width: 25px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    width: 28px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Built by JPaulDev</p>
      <Link href="https://github.com/JPaulDev/cv-creator">
        <GithubLogo src={logo} alt="GitHub Logo" />
      </Link>
    </StyledFooter>
  );
}

export default Footer;
