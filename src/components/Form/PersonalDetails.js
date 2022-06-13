import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';
import TextArea from './TextArea';

function PersonalDetails() {
  return (
    <Fieldset>
      <SectionHeader header="Personal Details" />
      <Input id="firstName" placeholder="First name" type="text" />
      <Input id="lastName" placeholder="Last name" type="text" />
      <Input id="title" placeholder="Title" type="text" />
      <TextArea id="aboutMe" placeholder="About me" />
    </Fieldset>
  );
}

export default PersonalDetails;
