import React, { useState } from 'react';
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

  function addNewExperience(e) {
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

  function deleteExperience(e, id) {
    e.preventDefault();

    const updatedExperience = experience.filter(
      (experience) => experience.id !== id,
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

  function addNewEducation(e) {
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
        handleDetailsChange={handleDetailsChange}
        experience={experience}
        handleExperienceChange={handleExperienceChange}
        addNewExperience={addNewExperience}
        deleteExperience={deleteExperience}
        education={education}
        handleEducationChange={handleEducationChange}
        addNewEducation={addNewEducation}
      />
    </StyledMain>
  );
}

export default Main;
