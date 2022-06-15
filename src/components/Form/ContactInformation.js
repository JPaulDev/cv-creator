import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';

function ContactInformation() {
  return (
    <Fieldset>
      <SectionHeader header="Contact Information" />
      <Input name="phoneNumber" placeholder="Phone number" type="tel" />
      <Input name="email" placeholder="Email" type="email" />
      <Input name="streetAddress" placeholder="Street address" type="text" />
      <Input name="cityName" placeholder="City name" type="text" />
    </Fieldset>
  );
}

export default ContactInformation;
