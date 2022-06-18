import styled from 'styled-components';

const FirstName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  letter-spacing: 0.5px;
`;

const LastName = styled.p`
  font-size: 24px;
  color: #fdce58;
  font-weight: 700;
  margin-bottom: 5px;
  letter-spacing: 0.5px;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 50px;
  letter-spacing: 0.5px;
`;

function NameDisplay() {
  return (
    <section>
      <FirstName>First name</FirstName>
      <LastName>Last name</LastName>
      <Title>Title</Title>
    </section>
  );
}

export default NameDisplay;
