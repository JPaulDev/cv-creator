import { useId } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  min-width: ${(props) => props.inputWidth || '450px'};
  min-height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 0 5px;
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
