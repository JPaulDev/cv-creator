import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 300px;
  min-height: 30px;
  background-color: ${(props) => props.buttonColor};
  border-radius: 5px;
  border: none;
`;

function Button(props) {
  const { onClick, buttonColor, buttonText } = props;

  return (
    <StyledButton type="button" onClick={onClick} buttonColor={buttonColor}>
      {buttonText}
    </StyledButton>
  );
}

export default Button;
