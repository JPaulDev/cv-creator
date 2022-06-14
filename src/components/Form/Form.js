import styled from 'styled-components';
import PersonalDetails from './PersonalDetails';
import ContactInformation from './ContactInformation';
import WorkExperience from './WorkExperience';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: #e5e7eb;
  padding: 10px 30px;
`;

function Form(props) {
  const {
    experience,
    handleExperienceChange,
    addNewExperience,
    deleteExperience,
  } = props;

  return (
    <StyledForm>
      <PersonalDetails />
      <ContactInformation />
      <WorkExperience
        experience={experience}
        handleExperienceChange={handleExperienceChange}
        addNewExperience={addNewExperience}
        deleteExperience={deleteExperience}
      />
    </StyledForm>
  );
}

export default Form;
