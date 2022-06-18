import { Fragment } from 'react';
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
        <Fragment key={experienceItem.id}>
          <WorkExperienceItem
            experienceItem={experienceItem}
            onExperienceChange={onExperienceChange}
          />
          <Button
            buttonText="Delete"
            title="Delete employment"
            onClick={(e) => onDeleteExperience(e, experienceItem.id)}
            buttonColor="#ff6060"
            buttonHoverColor="#ef4444"
          />
        </Fragment>
      ))}
      <Button
        buttonText="Add"
        title="Add additional employment"
        onClick={onAddExperience}
        buttonColor="#4ade80"
        buttonHoverColor="#22c55e"
      />
    </Fieldset>
  );
}

export default WorkExperience;
