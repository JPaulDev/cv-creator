import styled from 'styled-components';

const Header = styled.h3`
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
`;

function SectionHeader({ header }) {
  return <Header>{header}</Header>;
}

export default SectionHeader;
