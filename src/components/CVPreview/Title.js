import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

function Title({ children }) {
  return <Paragraph>{children}</Paragraph>;
}

export default Title;
