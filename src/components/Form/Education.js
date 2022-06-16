import { Fragment } from 'react';
import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import EducationItem from './EducationItem';
import Button from './Button';

function Education(props) {
  const {
    education,
    onEducationChange,
    onAddEducation,
    onDeleteEducation,
  } = props;

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
            buttonText="Delete Education"
            onClick={(e) => onDeleteEducation(e, educationItem.id)}
            buttonColor="#f87171"
            buttonHoverColor="#ef4444"
          />
        </Fragment>
      ))}
      <Button
        buttonText="Add Education"
        onClick={onAddEducation}
        buttonColor="#4ade80"
        buttonHoverColor="#22c55e"
      />
    </Fieldset>
  );
}

export default Education;
