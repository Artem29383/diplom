import styled from 'styled-components/macro';
import { HeaderHeight } from "../../constants";

export const Root = styled.div`
  width: 100%;
  height: ${HeaderHeight.desktop}px;
  position: fixed;
  box-shadow: rgb(0 0 0 / 15%) 0 2px 10px 0;
  background: rgb(255, 254, 251);
  z-index: 999;
  padding: 0 50px;
  justify-content: space-between;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  top: 0;
  left: 0;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
  
  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export const LogoWrapper = styled.div`
  max-width: 177px;
  width: 100%;
  height: 63px;
  margin-right: 50px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  margin-right: 25px;
  font-size: 20px;
  font-family: roboto, sans-serif;
  color: #404040;
  font-weight: 500;
  cursor: pointer;
  
  
  
  @media (max-width: 768px) {
    margin-right: 10px;
  }
  
  @media (max-width: 420px) {
    font-size: 18px;
  }
`;
