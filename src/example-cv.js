import uniqid from 'uniqid';

const details = {
  firstName: 'James',
  lastName: 'Christopher',
  title: 'Web Developer',
  aboutMe:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const contact = {
  phoneNumber: '07801234567',
  email: 'example@gmail.com',
  streetAddress: '43 Example Street',
  cityName: 'London',
};

const jobDescription =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate.';

const experience = [
  {
    id: uniqid(),
    jobTitle: 'Senior React Developer',
    companyName: 'Instagram',
    workStart: '2017',
    workEnd: 'Present',
    jobDescription,
  },
  {
    id: uniqid(),
    jobTitle: 'React Developer',
    companyName: 'Facebook Inc',
    workStart: '2014',
    workEnd: '2017',
    jobDescription,
  },
  {
    id: uniqid(),
    jobTitle: 'Junior Web Developer',
    companyName: 'Google LLC',
    workStart: '2011',
    workEnd: '2014',
    jobDescription,
  },
  {
    id: uniqid(),
    jobTitle: 'UI / UX Designer',
    companyName: 'Barclays UK',
    workStart: '2010',
    workEnd: '2011',
    jobDescription,
  },
];

const education = [
  {
    id: uniqid(),
    universityName: 'University of Oxford',
    cityName: 'Oxford',
    degreeSubject: 'MSc Computer Science',
    educationStart: '2009',
    educationEnd: '2010',
  },
  {
    id: uniqid(),
    universityName: 'Imperial College London',
    cityName: 'London',
    degreeSubject: 'Electrical Engineering',
    educationStart: '2004',
    educationEnd: '2008',
  },
];

const skills = [
  {
    id: uniqid(),
    skill: 'JavaScript',
  },
  {
    id: uniqid(),
    skill: 'React',
  },
  {
    id: uniqid(),
    skill: 'SQL',
  },
  {
    id: uniqid(),
    skill: 'Photoshop',
  },
  {
    id: uniqid(),
    skill: 'Illustrator',
  },
];

export { details, contact, education, experience, skills };
