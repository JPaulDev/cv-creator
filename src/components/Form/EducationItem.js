import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Div = styled.div`
  display: flex;
  column-gap: 10px;
`;

function EducationItem(props) {
  const { educationItem, onEducationChange, onDeleteEducation } = props;

  return (
    <>
      <Input
        name="universityName"
        placeholder="University name"
        type="text"
        onChange={(e) => onEducationChange(e, educationItem.id)}
      />
      <Input
        name="cityName"
        placeholder="City"
        type="text"
        onChange={(e) => onEducationChange(e, educationItem.id)}
      />
      <Input
        name="degreeSubject"
        placeholder="Degree subject"
        type="text"
        onChange={(e) => onEducationChange(e, educationItem.id)}
      />
      <Div>
        <Input
          name="educationStart"
          placeholder="Start date"
          type="text"
          inputWidth="220px"
          onChange={(e) => onEducationChange(e, educationItem.id)}
        />
        <Input
          name="educationEnd"
          placeholder="End date"
          type="text"
          inputWidth="220px"
          onChange={(e) => onEducationChange(e, educationItem.id)}
        />
      </Div>
      <Button
        buttonText="Delete Education"
        onClick={(e) => onDeleteEducation(e, educationItem.id)}
        buttonColor="#f87171"
      />
    </>
  );
}

export default EducationItem;
