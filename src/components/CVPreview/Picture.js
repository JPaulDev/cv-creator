import styled from 'styled-components';

const Img = styled.img`
  width: 214px;
  height: 318px;
`;

function Picture(props) {
  const { photo } = props;

  return <Img src={photo} />;
}

export default Picture;
