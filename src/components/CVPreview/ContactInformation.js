import styled from 'styled-components';
import SectionHeader from './SectionHeader';

const Contact = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

function ContactInformation() {
  return (
    <section>
      <SectionHeader>CONTACTS</SectionHeader>
      <Contact>Phone number</Contact>
    </section>
  );
}

export default ContactInformation;
