import React from "react";
import Form from "../../Components/Form";
import image from "../../Assets/LogoHub.svg";
import { Main, Container, Title, ContainerLink,LinkVoltar} from "./style";
import { Link, useNavigate } from "react-router-dom";


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
          <ContainerLink>
            <LinkVoltar to={"/sessions"}>
              Voltar
            </LinkVoltar>
          </ContainerLink>
        </Container>
        <Form />
      </Main>
    </>
  );
};

export default Register;
