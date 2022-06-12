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

function ContactInformation() {
  return (
    <Fieldset>
      <SectionHeader header="Contact Information" />
      <Input id="phoneNumber" placeholder="Phone number" type="tel" />
      <Input id="email" placeholder="Email" type="email" />
      <Input id="streetAddress" placeholder="Street address" type="text" />
      <Input id="cityName" placeholder="City name" type="text" />
    </Fieldset>
  );
}

export default ContactInformation;
