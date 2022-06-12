import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import Input from './Input';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

function ContactInformation() {
  return (
    <Section>
      <SectionHeader header="Contact Information" />
      <Input id="phoneNumber" placeholder="Phone number" type="tel" />
      <Input id="email" placeholder="Email" type="email" />
      <Input id="streetAddress" placeholder="Street address" type="text" />
      <Input id="cityName" placeholder="City name" type="text" />
    </Section>
  );
}

export default ContactInformation;
