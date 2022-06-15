import styled from 'styled-components';
import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';

const Div = styled.div`
  display: flex;
  column-gap: 10px;
`;

function Education() {
  return (
    <Fieldset>
      <SectionHeader header="Education" />
      <Input name="university" placeholder="University name" type="text" />
      <Input name="city" placeholder="City" type="text" />
      <Input name="degree" placeholder="Degree subject" type="text" />
      <Div>
        <Input
          name="educationStart"
          placeholder="Start date"
          type="text"
          inputWidth="220px"
        />
        <Input
          name="educationEnd"
          placeholder="End date"
          type="text"
          inputWidth="220px"
        />
      </Div>
    </Fieldset>
  );
}

export default Education;
