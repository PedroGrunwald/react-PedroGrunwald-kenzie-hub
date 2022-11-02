import React, { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import Card from "../../Components/Card";
import { AuthContext } from "../../Contexts/TechContext";
import { UserContext } from "../../Contexts/UserContext";
import {
  Main,
  Header,
  Title,
  ContainerMain,
  Name,
  H3,
  ContainerUL,
  StyledModal,
  StyledForm,
  StyledP,
  StyledButton,
  StyledDiv,
  LinkOut,
  StyledDivUl,
} from "./style";
import { useForm } from "react-hook-form";
import imagem from "../../Assets/+.svg";
const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const { name } = useContext(UserContext);

  const { addTech, technology } = useContext(AuthContext);

  const { getUser, getInfoUser } = useContext(UserContext);

  useEffect(() => {
    getInfoUser();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Main>
      <Header>
        <Title>Kenzie hub</Title>
        <LinkOut to={"/sessions"}> Sair </LinkOut>
      </Header>
      <ContainerMain>
        <Name>Ola,{name} </Name>
      </ContainerMain>
      <StyledDiv>
        <H3>Tecnologias</H3>
        <Button type="primary" onClick={showModal}>
          <img src={imagem} alt="adicionar tecnologia" />
        </Button>
      </StyledDiv>
      <StyledDivUl>
        <ContainerUL>
          {technology.length ? (
            technology.map((technology, index) => {
              return (
                <Card
                  techId={technology.id}
                  key={index}
                  nameTechnology={technology.title}
                  statusTechnology={technology.status}
                />
              );
            })
          ) : (
            <></>
          )}
        </ContainerUL>
      </StyledDivUl>
      <StyledModal
        title="Cadastrar Tecnologia"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="350px"
      >
        <StyledForm onSubmit={handleSubmit(addTech)}>
          <StyledP>Nome</StyledP>
          <input type="text" {...register("title")} />
          <StyledP>selecionar tecnologia</StyledP>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <StyledButton type="submit">Cadastrar Tecnologia</StyledButton>
        </StyledForm>
      </StyledModal>
    </Main>
  );
};

export default Dashboard;
