import { useNavigate } from "react-router-dom";
import { Forms, H2, Paragraphy, Input, Select, BtnRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const Form = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const SubmitUser = () => {
    setTimeout(() => {
      navigate("/sessions");
    });
  };

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
    contact: yup.string("forma de contato").required("contato é obrigatorio"),
    course_module: yup
      .string("qual o modulo?")
      .required("seleção é obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
      <p>{errors.name?.message}</p>
      <Input
        type="text"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <p>{errors.email?.message}</p>
      <Input
        type="password"
        placeholder="digite aqui sua senha"
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <Input
        type="password"
        placeholder="digite novamente sua senha"
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <Input type="text" placeholder="fale sobre voce" {...register("bio")} />
      <p>{errors.bio?.message}</p>
      <Input
        type="text"
        placeholder="opçao de contato"
        {...register("contact")}
      />
      <p>{errors.contact?.message}</p>
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
      <p>{errors.course_module?.message}</p>
      <BtnRegister type="submit">
        Cadastrar
      </BtnRegister>
    </Forms>
  );
};
export default Form;
