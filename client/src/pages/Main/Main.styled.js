import styled from 'styled-components/macro';

export const Root = styled.div``;

export const BlockOne = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: 650px;
  
  @media (max-width: 1400px) {
    grid-template-columns: 50% 50%;
  }
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const BlockTablet = styled.div`
grid-template-columns: 100%;
    grid-template-rows: auto;
    height: auto;
    display: none;
    
    @media (max-width: 1024px) {
    display: grid;
  }
`;

export const Videos = styled.div`
  height: 650px;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

export const Slide = styled.div`
  height: 650px;
  
  @media (max-width: 768px) {
    height: 350px;
  }
`;

export const WrapperImage = styled.div`
  height: 100%;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const BlockTwo = styled.div`
  height: 700px;
  position: relative;
  display: flex;
  min-height: 700px;
  justify-content: space-around;
  padding: 0 10%;
  
  @media (max-width: 1024px) {
     height: 350px;
     min-height: 350px;
  }
`;

export const EucaliptusPng = styled.div`
  position: absolute;
  top: 140px;
  left: 0;
  width: 100px;
`;

export const CedarWood = styled.div`
  position: absolute;
  right: 0;
  bottom: 100px;
  width: 100px;
`;

export const Png = styled.img`
  width: 100%;
`;

export const ContentBlock = styled.div`
  width: 100%;
  justify-content: space-around;
  display: flex;
`;

export const MobileImage = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MobileImagePng = styled.img`
  width: 100%;
`;

export const PreviewBot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextBot = styled.div`
  line-height: 1.17;
  text-align: left;
  margin-top: -100px;
  color: rgb(64, 64, 64);
  font-weight: bold;
  font-size: 31px;
  max-width: 400px;
  z-index: 2;
`;


export const StoriesSection = styled.div`
  min-height: 600px;
  padding: 50px 9%;
  background: rgb(237, 248, 245);
  position: relative;
`;

export const TitleStories = styled.div`
  font-weight: bold;
  line-height: 1.17;
  font-size: 46px;
  text-align: center;
`;
