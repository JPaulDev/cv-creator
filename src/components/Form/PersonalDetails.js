import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';
import TextArea from './TextArea';

function PersonalDetails() {
  return (
    <Fieldset>
      <SectionHeader header="Personal Details" />
      <Input name="firstName" placeholder="First name" type="text" />
      <Input name="lastName" placeholder="Last name" type="text" />
      <Input name="title" placeholder="Title" type="text" />
      <TextArea name="aboutMe" placeholder="About me" />
    </Fieldset>
  );
}

export default PersonalDetails;
