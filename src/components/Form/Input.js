import React, { useId } from 'react';
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
  const id = useId();

  return (
    <>
      <label htmlFor={id} hidden>
        {props.placeholder}
      </label>
      <StyledInput
        id={id}
        name={props.name}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        inputWidth={props.inputWidth}
        onChange={props.onChange}
      />
    </>
  );
}

export default Input;
