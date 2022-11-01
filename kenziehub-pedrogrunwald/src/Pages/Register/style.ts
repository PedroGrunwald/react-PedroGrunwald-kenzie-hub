import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #121214;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  padding: 1rem;
`;

export const Title = styled.img`
  width: 130px;
  height: 25px;
`;

export const ContainerLink = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: #f8f9fa;
  background-color: gray;
  border-radius: 5px;
`;

export const LinkVoltar = styled(Link)`
  text-decoration: none;
  color: black;
`;
