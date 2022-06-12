import styled from 'styled-components';

const StyledInput = styled.input`
  min-width: 450px;
  min-height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0 5px;
`;

function Input(props) {
  return (
    <>
      <label htmlFor={props.id} hidden>
        {props.placeholder}
      </label>
      <StyledInput
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
