import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 14px;
`;

function SmallTitle({ children }) {
  return <Paragraph>{children}</Paragraph>;
}

export default SmallTitle;
