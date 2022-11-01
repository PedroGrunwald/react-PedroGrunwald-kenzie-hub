import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import { AuthContext } from "../../Contexts/AuthContext";
import { UserContext } from "../../Contexts/UserContext";
import {
  Main,
  Header,
  Title,
  Buttton,
  ContainerMain,
  Name,
  H3,
  ContainerUL,
  StyledModal,
  StyledForm,
  StyledP,
  StyledButton,
} from "./style";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const { name, token, setToken } = useContext(UserContext);

  const { setTech, addTech } = useContext(AuthContext);

  const { setName, technology, getUser } = useContext(UserContext);

  const [tech, setTechnology] = useState([]);
  const navigate = useNavigate();
  const Logout = () => {
    setTimeout(() => {
      navigate("/sessions");
    });
  };

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
    console.log(tech);
  }, []);
  return (
    <Main>
      <Header>
        <Title>Kenzie hub</Title>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Buttton onClick={() => Logout()}>Sair</Buttton>
      </Header>
      <ContainerMain>
        <Name>ola {name} </Name>
      </ContainerMain>
      <div>
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
            <>
              <H3>Tecnologias</H3>
            </>
          )}
        </ContainerUL>
      </div>
      <StyledModal
        title="Cadastrar Tecnologia"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="350px"
      >
        <StyledForm onSubmit={handleSubmit((data) => addTech(data))}>
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
