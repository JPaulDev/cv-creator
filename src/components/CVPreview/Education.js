import styled from 'styled-components';
import { Fragment } from 'react';
import SectionHeader from './SectionHeader';
import Title from './Title';
import SmallTitle from './SmallTitle';

const Span = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 15px;
`;

function Education(props) {
  return (
    <section>
      <SectionHeader>EDUCATION</SectionHeader>
      {props.education.map((educationItem) => {
        const {
          id,
          universityName,
          cityName,
          degreeSubject,
          educationStart,
          educationEnd,
        } = educationItem;

        return (
          <Fragment key={id}>
            <Title>{degreeSubject}</Title>
            <SmallTitle>
              {universityName}
              {cityName ? `, ${cityName}` : cityName}
            </SmallTitle>
            <Span>
              {educationStart}
              {educationEnd ? ` - ${educationEnd}` : educationEnd}
            </Span>
          </Fragment>
        );
      })}
    </section>
  );
}

export default Education;
