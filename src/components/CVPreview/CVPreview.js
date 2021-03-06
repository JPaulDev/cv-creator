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
  background-color: white;
  width: 653px;
  height: 927px;
  padding: 35px 20px;
  column-gap: 30px;
  position: sticky;
  top: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.15),
    0 8px 10px -6px rgb(0 0 0 / 0.15);
`;

const LeftDiv = styled.div`
  z-index: 10;
  width: 214px;
`;

const RightDiv = styled.div`
  width: 373px;
  z-index: 10;
`;

const TopYellowDetail = styled.div`
  background: linear-gradient(to right, #fdce58 12%, 12%, #f8fafc 90%);
  position: absolute;
  width: 100%;
  height: 230px;
  left: 0;
  top: 0;
`;

const BottomYellowDetail = styled.div`
  background-color: #fdce58;
  position: absolute;
  width: 387px;
  height: 23px;
  bottom: 0;
  right: 0;
`;

function CVPreview(props) {
  const { photo, personalDetails, contactInfo, experience, education, skills } =
    props;

  return (
    <Div>
      <TopYellowDetail />
      <LeftDiv>
        <Picture photo={photo} />
        <NameDisplay personalDetails={personalDetails} />
        <ContactInformation contactInfo={contactInfo} />
        <Skills skills={skills} />
      </LeftDiv>
      <RightDiv>
        <Profile personalDetails={personalDetails} />
        <WorkExperience experience={experience} />
        <Education education={education} />
      </RightDiv>
      <BottomYellowDetail />
    </Div>
  );
}

export default CVPreview;
