import { useState } from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';
import Form from './Form/Form';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

function Main() {
  const [personalDetails, setDetails] = useState({
    firstName: '',
    lastName: '',
    title: '',
    aboutMe: '',
  });

  const [experience, setExperience] = useState([
    {
      id: uniqid(),
      jobTitle: '',
      companyName: '',
      workStart: '',
      workEnd: '',
      jobDescription: '',
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: uniqid(),
      universityName: '',
      cityName: '',
      degreeSubject: '',
      educationStart: '',
      educationEnd: '',
    },
  ]);

  function handleDetailsChange(e) {
    const { name, value } = e.target;
    setDetails({ ...personalDetails, [name]: value });
  }

  function handleExperienceChange(e, id) {
    const { name, value } = e.target;

    const updatedExperience = experience.map((experienceItem) => {
      if (experienceItem.id === id) {
        return { ...experienceItem, [name]: value };
      }
      return experienceItem;
    });

    setExperience(updatedExperience);
  }

  function handleAddExperience(e) {
    e.preventDefault();

    setExperience((prevState) => {
      const newExperience = {
        id: uniqid(),
        jobTitle: '',
        companyName: '',
        workStart: '',
        workEnd: '',
        jobDescription: '',
      };

      return [...prevState, newExperience];
    });
  }

  function handleDeleteExperience(e, id) {
    e.preventDefault();

    const updatedExperience = experience.filter(
      (experienceItem) => experienceItem.id !== id,
    );

    setExperience(updatedExperience);
  }

  function handleEducationChange(e, id) {
    const { name, value } = e.target;

    const updatedEducation = education.map((educationItem) => {
      if (educationItem.id === id) {
        return { ...educationItem, [name]: value };
      }
      return educationItem;
    });

    setEducation(updatedEducation);
  }

  function handleAddEducation(e) {
    e.preventDefault();

    setEducation((prevState) => {
      const newEducation = {
        id: uniqid(),
        universityName: '',
        cityName: '',
        degreeSubject: '',
        educationStart: '',
        educationEnd: '',
      };

      return [...prevState, newEducation];
    });
  }

  return (
    <StyledMain>
      <Form
        personalDetails={personalDetails}
        onDetailsChange={handleDetailsChange}
        experience={experience}
        onExperienceChange={handleExperienceChange}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        education={education}
        onEducationChange={handleEducationChange}
        onAddEducation={handleAddEducation}
      />
    </StyledMain>
  );
}

export default Main;
