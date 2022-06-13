import styled from 'styled-components';
import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';
import TextArea from './TextArea';

const Div = styled.div`
  display: flex;
  column-gap: 10px;
`;

function WorkExperience() {
  return (
    <Fieldset>
      <SectionHeader header="Work Experience" />
      <Input id="jobTitle" placeholder="Job title" type="text" />
      <Input id="companyName" placeholder="Company name" type="text" />
      <Div>
        <Input id="from" placeholder="From" type="text" inputWidth="220px" />
        <Input id="to" placeholder="To" type="text" inputWidth="220px" />
      </Div>
      <TextArea id="jobDescription" placeholder="Job description" />
    </Fieldset>
  );
}

export default WorkExperience;
