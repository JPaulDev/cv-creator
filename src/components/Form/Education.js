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
        <EducationItem
          key={educationItem.id}
          educationItem={educationItem}
          onEducationChange={onEducationChange}
          buttonText="Delete Education"
          onDeleteEducation={onDeleteEducation}
          buttonColor="#f87171"
        />
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
