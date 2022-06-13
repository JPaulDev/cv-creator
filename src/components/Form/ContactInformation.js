import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';

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
