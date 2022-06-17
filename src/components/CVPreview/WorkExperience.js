import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import Title from './Title';
import SmallTitle from './SmallTitle';
import Paragraph from './Paragraph';

const Span = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 3px;
`;

function WorkExperience() {
  return (
    <section>
      <SectionHeader>WORK EXPERIENCE</SectionHeader>
      <Title>Job title</Title>
      <SmallTitle>Company name</SmallTitle>
      <Span>2017 - Present</Span>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure
        dolor in reprehenderit in voluptate.
      </Paragraph>
    </section>
  );
}

export default WorkExperience;
