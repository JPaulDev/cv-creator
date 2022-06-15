import styled from 'styled-components';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

const Div = styled.div`
  display: flex;
  column-gap: 10px;
`;

function WorkExperienceItem(props) {
  const { experienceItem, handleExperienceChange, deleteExperience } = props;

  return (
    <>
      <Input
        name="jobTitle"
        placeholder="Job title"
        type="text"
        value={experienceItem.jobTitle}
        onChange={(e) => handleExperienceChange(e, experienceItem.id)}
      />
      <Input
        name="companyName"
        placeholder="Company name"
        type="text"
        value={experienceItem.companyName}
        onChange={(e) => handleExperienceChange(e, experienceItem.id)}
      />
      <Div>
        <Input
          name="workStart"
          placeholder="Start date"
          type="text"
          inputWidth="220px"
          value={experienceItem.workStart}
          onChange={(e) => handleExperienceChange(e, experienceItem.id)}
        />
        <Input
          name="workEnd"
          placeholder="End date"
          type="text"
          inputWidth="220px"
          value={experienceItem.workEnd}
          onChange={(e) => handleExperienceChange(e, experienceItem.id)}
        />
      </Div>
      <TextArea
        name="jobDescription"
        placeholder="Job description"
        value={experienceItem.jobDescription}
        onChange={(e) => handleExperienceChange(e, experienceItem.id)}
      />
      <Button
        buttonText="Delete Employment"
        onClick={(e) => deleteExperience(e, experienceItem.id)}
        buttonColor="#f87171"
      />
    </>
  );
}

export default WorkExperienceItem;
