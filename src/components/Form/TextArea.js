import { useId } from 'react';
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
  const { name, value, placeholder, onChange } = props;
  const id = useId();

  return (
    <>
      <label htmlFor={id} hidden>
        {placeholder}
      </label>
      <StyledTextArea
        id={id}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default TextArea;
