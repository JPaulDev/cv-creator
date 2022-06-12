import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import Input from './Input';

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  border: none;
`;

const TextArea = styled.textarea`
  min-width: 450px;
  min-height: 100px;
  resize: none;
  border: none;
  outline: none;
  padding: 5px 5px;
  border-radius: 5px;
`;

function PersonalDetails() {
  return (
    <Fieldset>
      <SectionHeader header="Personal Details" />
      <Input id="firstName" placeholder="First name" type="text" />
      <Input id="lastName" placeholder="Last name" type="text" />
      <Input id="title" placeholder="Title" type="text" />
      <TextArea placeholder="About me"></TextArea>
    </Fieldset>
  );
}

export default PersonalDetails;
