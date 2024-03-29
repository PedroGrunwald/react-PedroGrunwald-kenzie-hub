import React from "react";
import Form from "../../Components/Form";
import image from "../../Assets/LogoHub.svg";
import { Main, Container, Title, ContainerLink, LinkVoltar } from "./style";

const Register = () => {
  return (
    <>
      <Main>
        <Container>
          <Title src={image} />
          <ContainerLink>
            <LinkVoltar to={"/sessions"}>Voltar</LinkVoltar>
          </ContainerLink>
        </Container>
        <Form />
      </Main>
    </>
  );
};

export default Register;
