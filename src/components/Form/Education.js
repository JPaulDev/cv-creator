import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import EducationItem from './EducationItem';
import Button from './Button';

function Education(props) {
  const { education, onEducationChange, onAddEducation } = props;

  return (
    <Fieldset>
      <SectionHeader header="Education" />
      {education.map((educationItem) => (
        <EducationItem
          key={educationItem.id}
          educationItem={educationItem}
          onEducationChange={onEducationChange}
        />
      ))}
      <Button
        buttonText="Add Education"
        onClick={onAddEducation}
        buttonColor="#4ade80"
      />
    </Fieldset>
  );
}

export default Education;
