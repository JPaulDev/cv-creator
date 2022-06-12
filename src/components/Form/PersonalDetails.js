import styled from 'styled-components';
import Input from './Input';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
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
    <Section>
      <Input id="firstName" placeholder="First name" type="text" />
      <Input id="lastName" placeholder="Last name" type="text" />
      <Input id="title" placeholder="Title" type="text" />
      <TextArea placeholder="About me"></TextArea>
    </Section>
  );
}

export default PersonalDetails;
