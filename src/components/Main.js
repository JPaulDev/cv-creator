import { useState } from 'react';
import uniqid from 'uniqid';
import styled from 'styled-components';
import Form from './Form/Form';
import CVPreview from './CVPreview/CVPreview';
import emptyAvatar from '../img/empty-avatar.jpg';
import exampleAvatar from '../img/example-avatar.jpg';
import * as example from '../example-cv';

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 50px;
  flex: 1;
  padding: 30px;

  @media screen and (max-width: 1249px) {
    flex-direction: column;
    row-gap: 30px;
    justify-content: flex-start;
    align-items: center;
  }
`;

function Main() {
  const [photo, setPhoto] = useState(emptyAvatar);

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

  const [skills, setSkills] = useState([
    {
      id: uniqid(),
      skill: '',
    },
  ]);

  function handlePhotoChange(e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

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

  function handleSkillChange(e, id) {
    const { name, value } = e.target;

    const updatedSkill = skills.map((skill) => {
      if (skill.id === id) {
        return { ...skill, [name]: value };
      }
      return skill;
    });

    setSkills(updatedSkill);
  }

  function handleAddSkill(e) {
    e.preventDefault();

    setSkills((prevState) => {
      const newSkill = {
        id: uniqid(),
        skill: '',
      };

      return [...prevState, newSkill];
    });
  }

  function handleDeleteSkill(e, id) {
    e.preventDefault();

    const updatedSkills = skills.filter((skill) => skill.id !== id);

    setSkills(updatedSkills);
  }

  function handleFormReset(e) {
    e.preventDefault();
    e.target.parentNode.reset();

    setPhoto(emptyAvatar);
    setDetails({
      firstName: '',
      lastName: '',
      title: '',
      aboutMe: '',
    });
    setContact({
      phoneNumber: '',
      email: '',
      streetAddress: '',
      cityName: '',
    });
    setExperience([
      {
        id: uniqid(),
        jobTitle: '',
        companyName: '',
        workStart: '',
        workEnd: '',
        jobDescription: '',
      },
    ]);
    setEducation([
      {
        id: uniqid(),
        universityName: '',
        cityName: '',
        degreeSubject: '',
        educationStart: '',
        educationEnd: '',
      },
    ]);
    setSkills([
      {
        id: uniqid(),
        skill: '',
      },
    ]);
  }

  function handleLoadExample(e) {
    e.preventDefault();

    setPhoto(exampleAvatar);
    setDetails(example.details);
    setContact(example.contact);
    setExperience(example.experience);
    setEducation(example.education);
    setSkills(example.skills);
  }

  return (
    <StyledMain>
      <Form
        onPhotoChange={handlePhotoChange}
        personalDetails={personalDetails}
        onDetailsChange={handleDetailsChange}
        contactInfo={contactInfo}
        onContactChange={handleContactChange}
        experience={experience}
        onExperienceChange={handleExperienceChange}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        education={education}
        onEducationChange={handleEducationChange}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        skills={skills}
        onSkillChange={handleSkillChange}
        onAddSkill={handleAddSkill}
        onDeleteSkill={handleDeleteSkill}
        onFormReset={handleFormReset}
        onLoadExample={handleLoadExample}
      />
      <CVPreview
        photo={photo}
        personalDetails={personalDetails}
        contactInfo={contactInfo}
        experience={experience}
        education={education}
        skills={skills}
      />
    </StyledMain>
  );
}

export default Main;
