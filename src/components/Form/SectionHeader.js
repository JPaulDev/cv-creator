import styled from 'styled-components';

const Header = styled.h3`
  font-size: 1.5rem;
  text-align: left;
  width: 100%;
`;

function SectionHeader(props) {
  return <Header>{props.header}</Header>;
}

export default SectionHeader;
