import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  border: none;
  user-select: none;
  margin-bottom: 10px;
`;

function Fieldset({ children }) {
  return <StyledFieldset>{children}</StyledFieldset>;
}

export default Fieldset;
