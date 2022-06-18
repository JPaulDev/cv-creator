import SectionHeader from './SectionHeader';
import Paragraph from './Paragraph';

function Profile(props) {
  const { aboutMe } = props.personalDetails;

  return (
    <section>
      <SectionHeader>PROFILE</SectionHeader>
      <Paragraph>{aboutMe}</Paragraph>
    </section>
  );
}

export default Profile;
