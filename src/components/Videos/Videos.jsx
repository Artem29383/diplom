import React from 'react';

import * as Styled from './Videos.styled';

const Videos = ({ videoURL }) => {
  return (
    <Styled.VideoWrapper>
      <Styled.Video width="100%" height="100%" autoPlay loop muted>
        <source src={videoURL} type="video/mp4" />
      </Styled.Video>
    </Styled.VideoWrapper>
  );
};

export default Videos;
