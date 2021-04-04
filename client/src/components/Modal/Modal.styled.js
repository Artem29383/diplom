import styled from 'styled-components/macro';

export const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  
  &.fadeIn-enter {
    background-color: rgba(0, 0, 0, 0);
  }

  // enter to
  &.fadeIn-enter-active {
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color 300ms linear;
  }

  // exit from
  &.fadeIn-exit {
    background-color: rgba(0, 0, 0, 0.6);
  }

  // exit to
  &.fadeIn-exit-active {
      background-color: rgba(0, 0, 0, 0);
    transition: background-color 300ms linear;
  }
`;

export const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`;

export const Content = styled.div`
  min-height: 450px;
  background-color: #fff;
  z-index: 123;
  max-width: 720px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 1024px) {
      margin: 10px;
    grid-template-columns: 1fr;
  }
  
  &.fall-appear {
    transform: translateY(-200%);
  }

  // enter to
  &.fall-appear-active {
    transform: translateY(0);
    transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  // exit from
  &.fall-exit {
    transform: translateY(0);
  }

  // exit to
  &.fall-exit-active {
    transform: translateY(-200%);
    transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  
  @media (max-height: 800px) and (max-width: 1024px) {
    height: 250px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  
  &.scale-appear {
    transform: scale(1.2);
  }

  // enter to
  &.scale-appear-active {
    transform: scale(1);
    transition: transform 300ms linear 200ms;
  }
`;

export const Form = styled.div`
  height: 100%;
  padding: 60px 30px 20px;
  
  @media (max-height: 800px) {
    padding: 10px 30px 20px 30px;
  }
`;

export const FormTitle = styled.div`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
`;

export const FormDescription = styled.div`
  font-size: 16px;
  word-break: break-word;
`;

export const Svg = styled.div`
  margin-top: 20px;
  
  a {
    display: flex;
    align-items: center;
    
    p {
      margin-left: 5px;
    }

    &:hover {
      p {
        text-decoration: underline;
      }
    }
  }
`;
