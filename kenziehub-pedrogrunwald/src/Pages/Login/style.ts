import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: #121214;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 144.06px;
  height: 19.97px;
  left: 647px;
  top: 77.33px;
`;
export const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 369px;
  height: 502px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const H4 = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #f8f9fa;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16.2426px;
  gap: 10.15px;
  width: 329.93px;
  height: 48px;
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  border-radius: 4px;
`;

export const ButtonEnter = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 324px;
  height: 48px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
`;

export const LinkLogin = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Paragraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #868e96;
`;

export const ButtonRegister = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  width: 324px;
  height: 48px;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
  margin-bottom: 10px;
`;
