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
    contactInfo,
    onContactChange,
    personalDetails,
    onDetailsChange,
    experience,
    onExperienceChange,
    onAddExperience,
    onDeleteExperience,
    education,
    onEducationChange,
    onAddEducation,
    onDeleteEducation,
  } = props;

  return (
    <StyledForm>
      <PersonalDetails
        personalDetails={personalDetails}
        onDetailsChange={onDetailsChange}
      />
      <ContactInformation
        contactInfo={contactInfo}
        onContactChange={onContactChange}
      />
      <WorkExperience
        experience={experience}
        onExperienceChange={onExperienceChange}
        onAddExperience={onAddExperience}
        onDeleteExperience={onDeleteExperience}
      />
      <Education
        education={education}
        onEducationChange={onEducationChange}
        onAddEducation={onAddEducation}
        onDeleteEducation={onDeleteEducation}
      />
    </StyledForm>
  );
}

export default Form;
