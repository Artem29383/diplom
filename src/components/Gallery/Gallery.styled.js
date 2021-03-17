import styled from "styled-components/macro";

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

export const Card = styled.div`
cursor:pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
