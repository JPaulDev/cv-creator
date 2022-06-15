import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import WorkExperienceItem from './WorkExperienceItem';
import Button from './Button';

function WorkExperience(props) {
  const {
    experience,
    onExperienceChange,
    onAddExperience,
    onDeleteExperience,
  } = props;

  return (
    <Fieldset>
      <SectionHeader header="Work Experience" />
      {experience.map((experienceItem) => (
        <WorkExperienceItem
          key={experienceItem.id}
          experienceItem={experienceItem}
          onExperienceChange={onExperienceChange}
          buttonText="Delete Employment"
          onDeleteExperience={onDeleteExperience}
          buttonColor="#f87171"
        />
      ))}
      <Button
        buttonText="Add Employment"
        onClick={onAddExperience}
        buttonColor="#4ade80"
      />
    </Fieldset>
  );
}

export default WorkExperience;
