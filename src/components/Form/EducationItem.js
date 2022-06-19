import styled from 'styled-components';
import Input from './Input';

const Div = styled.div`
  display: flex;
  column-gap: 10px;
`;

function EducationItem(props) {
  const { educationItem, onEducationChange } = props;

  return (
    <>
      <Input
        name="universityName"
        placeholder="University name"
        type="text"
        value={educationItem.universityName}
        onChange={(e) => onEducationChange(e, educationItem.id)}
      />
      <Input
        name="cityName"
        placeholder="City"
        type="text"
        value={educationItem.cityName}
        onChange={(e) => onEducationChange(e, educationItem.id)}
      />
      <Input
        name="degreeSubject"
        placeholder="Degree subject"
        type="text"
        value={educationItem.degreeSubject}
        onChange={(e) => onEducationChange(e, educationItem.id)}
      />
      <Div>
        <Input
          name="educationStart"
          placeholder="Start date"
          type="text"
          inputWidth="220px"
          value={educationItem.educationStart}
          onChange={(e) => onEducationChange(e, educationItem.id)}
        />
        <Input
          name="educationEnd"
          placeholder="End date"
          type="text"
          inputWidth="220px"
          value={educationItem.educationEnd}
          onChange={(e) => onEducationChange(e, educationItem.id)}
        />
      </Div>
    </>
  );
}

export default EducationItem;
