import { useState } from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';
import Form from './Form/Form';
import CVPreview from './CVPreview/CVPreview';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  column-gap: 50px;
  flex: 1;
  padding: 30px;
`;

function Main() {
  const [personalDetails, setDetails] = useState({
    firstName: '',
    lastName: '',
    title: '',
    aboutMe: '',
  });

  const [contactInfo, setContact] = useState({
    phoneNumber: '',
    email: '',
    streetAddress: '',
    cityName: '',
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

  function handleContactChange(e) {
    const { name, value } = e.target;
    setContact({ ...contactInfo, [name]: value });
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

  function handleDeleteEducation(e, id) {
    e.preventDefault();

    const updatedEducation = education.filter(
      (educationItem) => educationItem.id !== id,
    );

    setEducation(updatedEducation);
  }

  return (
    <StyledMain>
      <Form
        contactInfo={contactInfo}
        onContactChange={handleContactChange}
        personalDetails={personalDetails}
        onDetailsChange={handleDetailsChange}
        experience={experience}
        onExperienceChange={handleExperienceChange}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        education={education}
        onEducationChange={handleEducationChange}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
      />
      <CVPreview />
    </StyledMain>
  );
}

export default Main;
