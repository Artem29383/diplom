import styled from 'styled-components';

export const StoriesSection = styled.div`
  min-height: 600px;
  padding: 50px 9%;
  background: rgb(237, 248, 245);
  position: relative;
`;

export const StoriesSectionContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  grid-gap: 0 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(1, 400px);
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleStories = styled.div`
  font-weight: bold;
  line-height: 1.17;
  font-size: 46px;
  text-align: center;
`;

export const Card = styled.div``;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
