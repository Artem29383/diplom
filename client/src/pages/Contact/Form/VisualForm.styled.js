import styled from "styled-components/macro";

export const Root = styled.form`
margin-top: 50px;`;

export const Line = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 310px;
    margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 6px;
  border: ${({ isError }) => isError ? '1px solid #FF0000' : '1px solid #D8D8D8'};
  background-color: #F5F5F5;
  color: ${({ isError }) => isError ? '#FF0000' : '#000'};
  font-size: 16px;
  -webkit-appearance: none;
  box-shadow: none!important;


  &::placeholder {
    color: ${({ isError }) => isError ? '#FF0000' : '#939393'};
    font-size: inherit;
    font-family: inherit;
  }`;

export const Area = styled.textarea`
  height: 125px;
  width: 100%;
  padding: 6px;
  border: ${({ isError }) => isError ? '1px solid #FF0000' : '1px solid #D8D8D8'};
  background-color: #F5F5F5;
  color: ${({ isError }) => isError ? '#FF0000' : '#000'};
  font-size: 16px;
  resize: none;
  -webkit-appearance: none;
  box-shadow: none!important;


  &::placeholder {
    color: ${({ isError }) => isError ? '#FF0000' : '#939393'};
    font-family: inherit;
    font-size: inherit;
  }`;

export const Button = styled.button`
  width: 100%;
  font-size: 16px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #0290FF;
  color: #fff;
  transition: opacity 200ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }`;