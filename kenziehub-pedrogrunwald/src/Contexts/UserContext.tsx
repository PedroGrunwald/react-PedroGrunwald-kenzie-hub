import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import Api from "../Services/api";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { IAxios } from "./AuthContext";

interface UserContextInterface {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  technology: ITech[];
  setTechnology: Dispatch<SetStateAction<ITech[]>>;
  submitUser: (data: any) => void;
  registerUser: (data: any) => void;
  getUser: () => void;
}

export interface ITech {
  created_at: string;
  id: string | number;
  status: string;
  title: string;
  updated_at: string;
  user: object;
}

interface UserProps {
  avatar_url: string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  title: string;
  status: string;
}

interface IUserRegister {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface Ilogin {
  email: string;
  password: number;
}

interface Iget {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
}

interface IloginResponse {
  user: Iget;
  token: string;
}

export const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

interface Props {
  children?: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [technology, setTechnology] = useState<any[]>([]);

  async function submitUser(data: Ilogin) {
    try {
      const response = await Api.post<IloginResponse>("/sessions ", data);

      localStorage.setItem("@Kenzie:token", response.data.token);
      console.log(response);
      setName(response.data.user.name);
      setToken(response.data.token);
      Api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      navigate("/profile");
      return;
    } catch (error) {
      const axiosError = error as AxiosError<IAxios>;
      console.log(axiosError);
    }
  }

  async function getUser() {
    setToken(localStorage.getItem("@Kenzie:token") ?? "");

    Api.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const response = await Api.get<Iget>("/profile");
      setTechnology(response.data.techs);
      setName(response.data.name);
    } catch (error) {
      const axiosError = error as AxiosError<IAxios>;
      console.log(axiosError);
    }
  }

  async function registerUser(data: IUserRegister) {
    try {
      const response = await Api.post<UserProps>("/users", data);
      console.log(response);
    } catch (error) {
      const axiosError = error as AxiosError<IAxios>;
      console.log(axiosError);
    }
  }

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        token,
        setToken,
        technology,
        setTechnology,
        submitUser,
        registerUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
