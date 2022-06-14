import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import WorkExperienceInputs from './WorkExperienceInputs';
import Button from './Button';

function WorkExperience(props) {
  const { experience, handleExperienceChange, addNewExperience } = props;

  return (
    <Fieldset>
      <SectionHeader header="Work Experience" />
      {experience.map((experienceItem) => {
        return (
          <WorkExperienceInputs
            key={experienceItem.id}
            experienceItem={experienceItem}
            handleExperienceChange={handleExperienceChange}
          />
        );
      })}
      <Button
        buttonText="Add Employment"
        onClick={addNewExperience}
        buttonColor="#4ade80"
      />
    </Fieldset>
  );
}

export default WorkExperience;
