import styled from 'styled-components';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

const Div = styled.div`
  display: flex;
  column-gap: 10px;
`;

function WorkExperienceItem(props) {
  const { experienceItem, handleExperienceChange } = props;

  return (
    <>
      <Input
        name="jobTitle"
        placeholder="Job title"
        type="text"
        value={experienceItem.jobTitle}
        experienceId={experienceItem.id}
        handleChange={handleExperienceChange}
      />
      <Input
        name="companyName"
        placeholder="Company name"
        type="text"
        value={experienceItem.companyName}
        experienceId={experienceItem.id}
        handleChange={handleExperienceChange}
      />
      <Div>
        <Input
          name="workStart"
          placeholder="Start date"
          type="text"
          inputWidth="220px"
          value={experienceItem.workStart}
          experienceId={experienceItem.id}
          handleChange={handleExperienceChange}
        />
        <Input
          name="workEnd"
          placeholder="End date"
          type="text"
          inputWidth="220px"
          value={experienceItem.workEnd}
          experienceId={experienceItem.id}
          handleChange={handleExperienceChange}
        />
      </Div>
      <TextArea
        name="jobDescription"
        placeholder="Job description"
        value={experienceItem.jobDescription}
        experienceId={experienceItem.id}
        handleChange={handleExperienceChange}
      />
      <Button
        buttonText="Delete Employment"
        deleteId={experienceItem.id}
        onClick={props.onClick}
        buttonColor="#f87171"
      />
    </>
  );
}

export default WorkExperienceItem;
