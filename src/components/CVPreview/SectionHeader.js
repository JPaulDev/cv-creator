import styled from 'styled-components';

const Header = styled.h3`
  font-size: 17px;
  border-bottom: 3px solid #fdce58;
  line-height: 30px;
  margin-bottom: 10px;
  letter-spacing: 0.5px;
`;

function SectionHeader({ children }) {
  return <Header>{children}</Header>;
}

export default SectionHeader;
