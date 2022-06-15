import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';
import TextArea from './TextArea';

function PersonalDetails(props) {
  const { personalDetails, handleDetailsChange } = props;

  return (
    <Fieldset>
      <SectionHeader header="Personal Details" />
      <Input
        name="firstName"
        placeholder="First name"
        type="text"
        value={personalDetails.firstName}
        onChange={handleDetailsChange}
      />
      <Input
        name="lastName"
        placeholder="Last name"
        type="text"
        value={personalDetails.lastName}
        onChange={handleDetailsChange}
      />
      <Input
        name="title"
        placeholder="Title"
        type="text"
        value={personalDetails.title}
        onChange={handleDetailsChange}
      />
      <TextArea
        name="aboutMe"
        placeholder="About me"
        value={personalDetails.aboutMe}
        onChange={handleDetailsChange}
      />
    </Fieldset>
  );
}

export default PersonalDetails;
