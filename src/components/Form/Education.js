import { Fragment } from 'react';
import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import EducationItem from './EducationItem';
import Button from './Button';

function Education(props) {
  const { education, onEducationChange, onAddEducation, onDeleteEducation } =
    props;

  return (
    <Fieldset>
      <SectionHeader header="Education" />
      {education.map((educationItem) => (
        <Fragment key={educationItem.id}>
          <EducationItem
            educationItem={educationItem}
            onEducationChange={onEducationChange}
          />
          <Button
            title="Delete education"
            onClick={(e) => onDeleteEducation(e, educationItem.id)}
            buttonColor="#ff6060"
            buttonHoverColor="#ef4444"
          >
            Delete
          </Button>
        </Fragment>
      ))}
      <Button
        title="Add additional education"
        onClick={onAddEducation}
        buttonColor="#4ade80"
        buttonHoverColor="#22c55e"
      >
        Add
      </Button>
    </Fieldset>
  );
}

export default Education;
