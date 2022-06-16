import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';

function ContactInformation(props) {
  const { contactInfo, onContactChange } = props;

  return (
    <Fieldset>
      <SectionHeader header="Contact Information" />
      <Input
        name="phoneNumber"
        placeholder="Phone number"
        type="tel"
        value={contactInfo.phoneNumber}
        onChange={onContactChange}
      />
      <Input
        name="email"
        placeholder="Email"
        type="email"
        value={contactInfo.email}
        onChange={onContactChange}
      />
      <Input
        name="streetAddress"
        placeholder="Street address"
        type="text"
        value={contactInfo.streetAddress}
        onChange={onContactChange}
      />
      <Input
        name="cityName"
        placeholder="City name"
        type="text"
        value={contactInfo.cityName}
        onChange={onContactChange}
      />
    </Fieldset>
  );
}

export default ContactInformation;
