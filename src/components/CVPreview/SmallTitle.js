import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 14px;
  letter-spacing: 0.5px;
`;

function SmallTitle({ children }) {
  return <Paragraph>{children}</Paragraph>;
}

export default SmallTitle;
