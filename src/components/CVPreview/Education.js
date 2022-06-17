import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import Title from './Title';
import SmallTitle from './SmallTitle';

const Span = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 15px;
`;

function Education() {
  return (
    <section>
      <SectionHeader>EDUCATION</SectionHeader>
      <Title>Degree subject</Title>
      <SmallTitle>University name</SmallTitle>
      <Span>2009 - 2010</Span>
    </section>
  );
}

export default Education;
