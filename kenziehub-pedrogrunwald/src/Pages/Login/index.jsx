import { useNavigate } from "react-router-dom";
import {
  Main,
  Image,
  DivMain,
  H4,
  Input,
  ButtonEnter,
  Paragraph,
  ButtonRegister,
} from "./style";
import Api from "../../Services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import image from "../../Assets/LogoHub.svg"
import { useState } from "react";


const Login = () => {

const [token,setToken] = useState("")


  const schema = yup.object({
    email: yup
      .string()
      .email("Deve ser um e-mail válido")
      .required("Email é obrigatório"),
    password: yup
    .string()
    .required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submitUser(data) {
    Api.post("/sessions ", data)
      .then((response) => response.data)
      .then((response) => response.token)
      .then((response) => {
        localStorage.setItem("@Kenzie:token", response);
        setToken(response)
        return response;
      })
      .catch((err) => console.log(err));
  }


  const navigate = useNavigate();
  const submitLogin = () => {
    console.log("fora do timeout");
    setTimeout(() => {
      console.log("dentro do timeout");
      navigate("/users");
    });
  };

  const goDashboard = () => {
    setTimeout(() => {
      navigate("/profile");
    });
  };
  return (
    <Main>
      <div>
        <Image src={image}/>
      </div>
      <DivMain>
        <H4>Login</H4>
        <form onSubmit={handleSubmit(submitUser)}>
          <Input type="text" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <Input type="password" placeholder="senha" {...register("password")} />
          <p>{errors.password?.message}</p>
          <ButtonEnter type="submit" onClick={() => goDashboard()}>
            Entrar
          </ButtonEnter>
        </form>
        <Paragraph>Ainda nao possui uma conta?</Paragraph>
        <ButtonRegister onClick={() => submitLogin()}>
          Cadastre-se
        </ButtonRegister>
      </DivMain>
    </Main>
  );
};

export default Login;
