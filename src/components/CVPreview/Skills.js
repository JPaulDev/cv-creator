import styled from 'styled-components';
import SectionHeader from './SectionHeader';

const Section = styled.section`
  margin-top: 50px;
`;

const List = styled.ul`
  font-size: 14px;
  margin-bottom: 8px;
  margin-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;

  &::marker {
    color: #fdce58;
  }
`;

function Skills() {
  return (
    <Section>
      <SectionHeader>SKILLS</SectionHeader>
      <List>
        <ListItem>Skill</ListItem>
      </List>
    </Section>
  );
}

export default Skills;
