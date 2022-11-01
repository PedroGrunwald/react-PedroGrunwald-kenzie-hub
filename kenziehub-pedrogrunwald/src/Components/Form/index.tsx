import { Forms, H2, Paragraphy, Input, Select, BtnRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

interface IuseForm {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

const Form = () => {
  const { registerUser } = useContext(UserContext);

  const schema = yup.object({
    email: yup
      .string()
      .email("Deve ser um e-mail válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),
    name: yup.string().required("Nome é obrigatorio"),
    bio: yup.string().required("bio é obrigatoria"),
    contact: yup.string().required("contato é obrigatorio"),
    course_module: yup.string().required("seleção é obrigatorio"),
  });
  const { register, handleSubmit } = useForm<IuseForm>({
    resolver: yupResolver(schema),
  });

  return (
    <Forms onSubmit={handleSubmit(registerUser)}>
      <H2>Crie sua conta</H2>
      <Paragraphy>Rapido e gratis, vamos nessa </Paragraphy>
      <Input
        type="text"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />

      <Input
        type="text"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />

      <Input
        type="password"
        placeholder="digite aqui sua senha"
        {...register("password")}
      />

      <Input
        type="password"
        placeholder="digite novamente sua senha"
        {...register("confirmPassword")}
      />

      <Input type="text" placeholder="fale sobre voce" {...register("bio")} />

      <Input
        type="text"
        placeholder="opçao de contato"
        {...register("contact")}
      />

      <Select {...register("course_module")}>
        <option value="">Selecionar</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          "Segundo módulo (Frontend Avançado)"
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          "Terceiro módulo (Introdução ao Backend)"
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          "Quarto módulo (Backend Avançado)"
        </option>
      </Select>

      <BtnRegister type="submit">Cadastrar</BtnRegister>
    </Forms>
  );
};
export default Form;
