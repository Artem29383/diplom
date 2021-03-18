import styled from "styled-components/macro";

export const Root = styled.div``;

export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 88px;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Background = styled.div`
  width: 100%;
  height: calc(100vh - 88px);
  background-image: ${({url}) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;