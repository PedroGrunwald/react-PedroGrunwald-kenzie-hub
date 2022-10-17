import React from "react";
import { useNavigate } from "react-router-dom";
import {Main, Header, Title, Button,ContainerMain,Name,Paragraphy } from "./style";

const Dashboard = () => {

const navigate = useNavigate()
const Logout = () =>{
    setTimeout(() =>{
        navigate("/sessions")
    })
}


  return (
    <Main>
      <Header>
        <Title>Kenzie hub</Title>
        <Button onClick={() => Logout()}>Sair</Button>
      </Header>
        <ContainerMain>
          <Name>BEM VINDO SAMUEL LEAO</Name>
        </ContainerMain>
      <main>
        <Paragraphy>Que pena! Estamos em desenvolvimento</Paragraphy>
        <Paragraphy>Nossa aplicação está em desenvolvimento, em breve teremos novidades</Paragraphy>
      </main>
    </Main>
  );
};

export default Dashboard;
