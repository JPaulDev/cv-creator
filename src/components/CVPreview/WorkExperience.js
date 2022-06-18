import styled from 'styled-components';
import { Fragment } from 'react';
import SectionHeader from './SectionHeader';
import Title from './Title';
import SmallTitle from './SmallTitle';
import Paragraph from './Paragraph';

const Span = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 3px;
`;

function WorkExperience(props) {
  return (
    <section>
      <SectionHeader>WORK EXPERIENCE</SectionHeader>
      {props.experience.map((experienceItem) => {
        const {
          id,
          jobTitle,
          companyName,
          workStart,
          workEnd,
          jobDescription,
        } = experienceItem;

        return (
          <Fragment key={id}>
            <Title>{jobTitle}</Title>
            <SmallTitle>{companyName}</SmallTitle>
            <Span>
              {workStart}
              {workEnd ? ` - ${workEnd}` : workEnd}
            </Span>
            <Paragraph>{jobDescription}</Paragraph>
          </Fragment>
        );
      })}
    </section>
  );
}

export default WorkExperience;
