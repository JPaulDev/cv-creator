import styled from 'styled-components';
import PersonalDetails from './PersonalDetails';
import ContactInformation from './ContactInformation';
import WorkExperience from './WorkExperience';
import Education from './Education';

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
    education,
    handleEducationChange,
    addNewEducation,
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
      <Education
        education={education}
        handleEducationChange={handleEducationChange}
        addNewEducation={addNewEducation}
      />
    </StyledForm>
  );
}

export default Form;
