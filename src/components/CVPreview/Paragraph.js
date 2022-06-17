import styled from 'styled-components';

const StyledParagraph = styled.p`
  min-width: 373px;
  font-size: 12px;
  margin-bottom: 15px;
`;

function Paragraph({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
