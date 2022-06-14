import React, { useState } from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';
import Form from './Form/Form';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;

function Main() {
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

  return (
    <StyledMain>
      <Form
        experience={experience}
        handleExperienceChange={handleExperienceChange}
        addNewExperience={addNewExperience}
        deleteExperience={deleteExperience}
      />
    </StyledMain>
  );
}

export default Main;
