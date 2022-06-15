import React, { useId } from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  min-width: 450px;
  min-height: 100px;
  resize: none;
  border: none;
  outline: none;
  padding: 5px 5px;
  border-radius: 5px;
`;

function TextArea(props) {
  const id = useId();

  return (
    <>
      <label htmlFor={id} hidden>
        {props.placeholder}
      </label>
      <StyledTextArea
        id={id}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
}

export default TextArea;
