import styled from 'styled-components';
import EmptyAvatar from '../../img/empty-avatar.jpg';

const Img = styled.img`
  width: 214px;
  height: 318px;
`;

function Picture(props) {
  const { photo } = props;

  return <Img src={photo || EmptyAvatar} />;
}

export default Picture;
