import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';
import TextArea from './TextArea';
import PhotoInput from './PhotoInput';

function PersonalDetails(props) {
  const { personalDetails, onDetailsChange, onPhotoChange } = props;

  return (
    <Fieldset>
      <SectionHeader header="Personal Details" />
      <Input
        name="firstName"
        placeholder="First name"
        type="text"
        value={personalDetails.firstName}
        onChange={onDetailsChange}
      />
      <Input
        name="lastName"
        placeholder="Last name"
        type="text"
        value={personalDetails.lastName}
        onChange={onDetailsChange}
      />
      <Input
        name="title"
        placeholder="Title"
        type="text"
        value={personalDetails.title}
        onChange={onDetailsChange}
      />
      <TextArea
        name="aboutMe"
        placeholder="About me"
        value={personalDetails.aboutMe}
        onChange={onDetailsChange}
      />
      <PhotoInput onPhotoChange={onPhotoChange} />
    </Fieldset>
  );
}

export default PersonalDetails;
