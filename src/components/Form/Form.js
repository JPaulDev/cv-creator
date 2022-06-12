import styled from 'styled-components';
import PersonalDetails from './PersonalDetails';

const StyledForm = styled.form`
  background-color: #e5e7eb;
  padding: 30px;
`;

function Form() {
  return (
    <StyledForm>
      <PersonalDetails />
    </StyledForm>
  );
}

export default Form;
