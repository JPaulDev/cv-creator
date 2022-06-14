import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 300px;
  min-height: 30px;
  background-color: ${(props) => props.buttonColor};
  border-radius: 5px;
  border: none;
`;

function Button(props) {
  return (
    <StyledButton
      type="button"
      onClick={(e) => props.onClick(e, props.deleteId)}
      buttonColor={props.buttonColor}
    >
      {props.buttonText}
    </StyledButton>
  );
}

export default Button;
