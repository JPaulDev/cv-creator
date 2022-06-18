import styled from 'styled-components';
import SectionHeader from './SectionHeader';

const Contact = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

function ContactInformation(props) {
  const { phoneNumber, email, streetAddress, cityName } = props.contactInfo;

  return (
    <section>
      <SectionHeader>CONTACTS</SectionHeader>
      <Contact>{phoneNumber}</Contact>
      <Contact>{email}</Contact>
      <Contact>
        {streetAddress}
        {cityName ? `, ${cityName}` : cityName}
      </Contact>
    </section>
  );
}

export default ContactInformation;
