import { useId } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  min-width: ${(props) => props.inputWidth || '450px'};
  min-height: 30px;
  border: none;
  outline: none;
  padding: 0 5px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
`;

function Input(props) {
  const { name, value, type, placeholder, inputWidth, onChange } = props;
  const id = useId();

  return (
    <>
      <label htmlFor={id} hidden>
        {placeholder}
      </label>
      <StyledInput
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        inputWidth={inputWidth}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
