import styled from 'styled-components';
import PersonalDetails from './PersonalDetails';
import ContactInformation from './ContactInformation';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: #e5e7eb;
  padding: 10px 30px;
`;

function Form() {
  return (
    <StyledForm>
      <PersonalDetails />
      <ContactInformation />
    </StyledForm>
  );
}

export default Form;
