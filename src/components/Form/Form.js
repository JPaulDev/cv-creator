import styled from 'styled-components';
import PersonalDetails from './PersonalDetails';
import ContactInformation from './ContactInformation';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';
import Button from './Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: #e5e7eb;
  padding: 10px 30px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.15),
    0 8px 10px -6px rgb(0 0 0 / 0.15);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

function Form(props) {
  const {
    onPhotoChange,
    personalDetails,
    onDetailsChange,
    contactInfo,
    onContactChange,
    experience,
    onExperienceChange,
    onAddExperience,
    onDeleteExperience,
    education,
    onEducationChange,
    onAddEducation,
    onDeleteEducation,
    skills,
    onSkillChange,
    onAddSkill,
    onDeleteSkill,
    onFormReset,
    onLoadExample,
  } = props;

  return (
    <StyledForm>
      <PersonalDetails
        onPhotoChange={onPhotoChange}
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
      <Skills
        skills={skills}
        onSkillChange={onSkillChange}
        onDeleteSkill={onDeleteSkill}
        onAddSkill={onAddSkill}
      />
      <Button
        title="Reset all inputs"
        onClick={(e) => onFormReset(e)}
        buttonColor="#93c5fd"
        buttonHoverColor="#60a5fa"
      >
        Reset
      </Button>
      <Button
        title="Load an example CV"
        onClick={(e) => onLoadExample(e)}
        buttonColor="#93c5fd"
        buttonHoverColor="#60a5fa"
      >
        Load Example
      </Button>
    </StyledForm>
  );
}

export default Form;
