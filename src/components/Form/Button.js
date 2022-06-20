import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 250px;
  min-height: 30px;
  font-weight: 600;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.8);
  background-color: ${(props) => props.buttonColor};
  border-radius: 5px;
  border: none;
  user-select: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: ${(props) => props.buttonHoverColor};
  }
`;

function Button(props) {
  const { children, onClick, buttonColor, buttonHoverColor, title } = props;

  return (
    <StyledButton
      title={title}
      type="button"
      onClick={onClick}
      buttonColor={buttonColor}
      buttonHoverColor={buttonHoverColor}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
