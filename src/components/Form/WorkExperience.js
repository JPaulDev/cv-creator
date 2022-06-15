import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import WorkExperienceItem from './WorkExperienceItem';
import Button from './Button';

function WorkExperience(props) {
  const {
    experience,
    handleExperienceChange,
    addNewExperience,
    deleteExperience,
  } = props;

  return (
    <Fieldset>
      <SectionHeader header="Work Experience" />
      {experience.map((experienceItem) => {
        return (
          <WorkExperienceItem
            key={experienceItem.id}
            experienceItem={experienceItem}
            handleExperienceChange={handleExperienceChange}
            buttonText="Delete Employment"
            onClick={deleteExperience}
            buttonColor="#f87171"
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
