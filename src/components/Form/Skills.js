import styled from 'styled-components';
import Fieldset from './Fieldset';
import SectionHeader from './SectionHeader';
import Input from './Input';
import { ReactComponent as ReactLogo } from '../../img/delete-icon.svg';

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  width: 35px;
  height: 35px;
  font-size: 35px;
  line-height: 20px;
  border-radius: 50%;
  border: none;
  color: white;
  background-color: #4ade80;
  user-select: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #22c55e;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;

const DeleteButton = styled.button`
  width: 31px;
  height: 31px;
  fill: #f87171;
  border: none;
  user-select: none;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  filter: drop-shadow(1px 0.5px 0.5px rgb(0 0 0 / 0.3));

  &:hover {
    fill: #ef4444;
  }
`;

function Skills(props) {
  const { skills, onSkillChange, onAddSkill, onDeleteSkill } = props;

  return (
    <Fieldset>
      <SectionHeader header="Skills" />
      {skills.map((skill) => (
        <Div key={skill.id}>
          <Input
            name="skill"
            placeholder="Skill"
            type="text"
            inputWidth="220px"
            value={skill.skill}
            onChange={(e) => onSkillChange(e, skill.id)}
          />
          <DeleteButton
            title="Delete skill"
            onClick={(e) => onDeleteSkill(e, skill.id)}
          >
            <ReactLogo />
          </DeleteButton>
        </Div>
      ))}
      <AddButton title="Add a new skill" onClick={onAddSkill}>
        +
      </AddButton>
    </Fieldset>
  );
}

export default Skills;
