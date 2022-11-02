import {
  Main,
  Image,
  DivMain,
  H4,
  Input,
  ButtonEnter,
  Paragraph,
  ButtonRegister,
  LinkLogin,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import image from "../../Assets/LogoHub.svg";
import { useContext } from "react";
import React from "react";
import { UserContext } from "../../Contexts/UserContext";

interface IloginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { submitUser } = useContext(UserContext);

  const schema = yup.object({
    email: yup
      .string()
      .email("Deve ser um e-mail válido")
      .required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginForm>({
    resolver: yupResolver(schema),
  });

  return (
    <Main>
      <div>
        <Image src={image} />
      </div>
      <DivMain>
        <H4>Login</H4>
        <form onSubmit={handleSubmit(submitUser)}>
          <Input type="text" placeholder="Email" {...register("email")} />
          <p>{errors?.email?.message}</p>
          <Input
            type="password"
            placeholder="senha"
            {...register("password")}
          />
          <p>{errors?.password?.message}</p>

          <ButtonEnter type="submit"> Entrar</ButtonEnter>
        </form>
        <Paragraph>Ainda nao possui uma conta?</Paragraph>

        <ButtonRegister>
          <LinkLogin to={"/users"}>Cadastre-se</LinkLogin>
        </ButtonRegister>
      </DivMain>
    </Main>
  );
};

export default Login;
