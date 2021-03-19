import styled from 'styled-components/macro';

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({url}) => `white url('${url}') no-repeat center`};
  background-size: cover;
`;

export const Video = styled.video`
  object-fit: cover;
`;
