import React, { useContext, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import { AuthContext } from "../../Contexts/AuthContext";
import {
  Main,
  Header,
  Title,
  Buttton,
  ContainerMain,
  Name,
  H3,
  ContainerUL,
} from "./style";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const {
    name,
    setName,
    technology,
    setTech,
    addTech,
    token,
    setToken,
    getUser,
  } = useContext(AuthContext);
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
      <Modal
        title="Cadastrar Tecnologia"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit((data) => addTech(data))}>
          <p>Nome</p>
          <input type="text" {...register("title")} />
          <p>selecionar tecnologia</p>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>
      </Modal>
    </Main>
  );
};

export default Dashboard;
