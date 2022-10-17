import React from "react";
import Form from "../../Components/Form";
import image from '../../Assets/LogoHub.svg'
import { Main, Container, Title, Button } from "./style";

const Register = () => {
  return (
    <>
      <Main>
        <Container>
          <Title src={image} />
          <Button>Voltar</Button>
        </Container>
        <Form />
      </Main>
    </>
  );
};

export default Register;
