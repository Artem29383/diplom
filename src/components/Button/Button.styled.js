import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 30px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => margin};
  text-transform: uppercase;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  text-align: center;
  background: rgb(185, 171, 239);
  font-weight: bold;
  padding: ${({ padding }) => padding};
  min-width: 145px;
`;
