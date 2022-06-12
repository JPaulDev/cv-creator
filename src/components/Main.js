import styled from 'styled-components';
import Form from './Form/Form';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

function Main() {
  return (
    <StyledMain>
      <Form />
    </StyledMain>
  );
}

export default Main;
