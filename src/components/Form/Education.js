import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import EducationItem from './EducationItem';
import Button from './Button';

function Education(props) {
  const { education, handleEducationChange, addNewEducation } = props;

  return (
    <Fieldset>
      <SectionHeader header="Education" />
      {education.map((educationItem) => {
        return (
          <EducationItem
            key={educationItem.id}
            educationItem={educationItem}
            handleEducationChange={handleEducationChange}
          />
        );
      })}
      <Button
        buttonText="Add Education"
        onClick={addNewEducation}
        buttonColor="#4ade80"
      />
    </Fieldset>
  );
}

export default Education;
