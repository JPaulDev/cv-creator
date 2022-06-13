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
  return (
    <>
      <label htmlFor={props.id} hidden>
        {props.placeholder}
      </label>
      <StyledTextArea id={props.id} placeholder={props.placeholder} />
    </>
  );
}

export default TextArea;
