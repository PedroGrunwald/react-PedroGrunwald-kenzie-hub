import React from "react";
import Form from "../../Components/Form";
import image from "../../Assets/LogoHub.svg";
import { Main, Container, Title, Button } from "./style";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    setTimeout(() => {
      navigate("/sessions");
    });
  };
  return (
    <>
      <Main>
        <Container>
          <Title src={image} />
          <Button type="submit" onClick={() => goLogin()}>
            Voltar
          </Button>
        </Container>
        <Form />
      </Main>
    </>
  );
};

export default Register;
