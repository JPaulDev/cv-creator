import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import WorkExperienceInputs from './WorkExperienceInputs';

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
      <button onClick={(e) => addNewExperience(e)}>Add</button>
    </Fieldset>
  );
}

export default WorkExperience;
