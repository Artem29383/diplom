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
  z-index: -1;
`;

export const Background = styled.div`
  width: 100%;
  position: absolute;
  min-height: calc(100vh - 88px);
  background-image: ${({url}) => `url(${url})`};
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -2;
  height: 100%;
  background-position: center;
`;

export const WrapperContactForm = styled.div`
  min-height: calc(100vh - 88px);
  padding: 50px 0 50px 50px;
`;

export const ContactForm = styled.div`
  max-width: 400px;
  width: 100%;
  z-index: 2;
  height: auto;
  background: white;
  padding: 25px 15px 1px 20px;
`;

export const Title  = styled.div`
font-size: 20px;`;

export const Description  = styled.div`
  font-weight: 700;
  margin-top: 20px;
  max-width: 240px;
  text-align: left;
`;