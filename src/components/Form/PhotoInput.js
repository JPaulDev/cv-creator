import { useId } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
`;

const Label = styled.label`
  min-width: 250px;
  text-align: center;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 30px;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  background-color: #4ade80;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #22c55e;
  }
`;

function PhotoInput(props) {
  const id = useId();

  return (
    <>
      <Label title="Add a photo" htmlFor={id}>
        Add a photo
        <Input
          id={id}
          type="file"
          accept="image/*"
          onChange={(e) => props.onPhotoChange(e)}
        />
      </Label>
    </>
  );
}

export default PhotoInput;
