import styled from 'styled-components';
import Picture from './Picture';
import NameDisplay from './NameDisplay';
import ContactInformation from './ContactInformation';
import Skills from './Skills';
import Profile from './Profile';
import WorkExperience from './WorkExperience';
import Education from './Education';

const Div = styled.div`
  display: flex;
  background-color: #f9fafb;
  width: 653px;
  height: 927px;
  padding: 35px 20px;
  column-gap: 30px;
  position: sticky;
  top: 0;
`;

const LeftDiv = styled.div`
  z-index: 10;
`;

const TopYellowDetail = styled.div`
  background-color: #fdce58;
  position: absolute;
  width: 80px;
  height: 230px;
  left: 0;
  top: 0;
`;

const BottomYellowDetail = styled.div`
  background-color: #fdce58;
  position: absolute;
  width: calc(100% - 264px);
  height: 23px;
  bottom: 0;
  right: 0;
`;

function CVPreview() {
  return (
    <Div>
      <TopYellowDetail />
      <LeftDiv>
        <Picture />
        <NameDisplay />
        <ContactInformation />
        <Skills />
      </LeftDiv>
      <div>
        <Profile />
        <WorkExperience />
        <Education />
      </div>
      <BottomYellowDetail />
    </Div>
  );
}

export default CVPreview;