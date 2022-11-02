import {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useEffect,
  useContext,
} from "react";
import Api from "../Services/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { AuthContext, IAxios } from "./TechContext";

interface UserContextInterface {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  submitUser: (data: Ilogin) => void;
  registerUser: (data: IUserRegister) => void;
  getUser: () => void;
  getInfoUser: () => void;
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
  password: string;
}

export interface Iget {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
}

interface IloginResponse {
  user: UserProps;
  token: string;
}

export const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

interface Props {
  children?: ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const { setTechnology } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<UserProps>({} as UserProps);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@Kenzie:token");

      if (token) {
        try {
          Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const { data } = await Api.get("/profile");
          setUser(data);
          setTechnology(data.techs);
        } catch (error) {
          console.log(error);
        }
      }
    }
    loadUser();
  }, []);

  async function submitUser(data: Ilogin) {
    try {
      const response = await Api.post<IloginResponse>("/sessions ", data);
      const { user: userResponse, token } = response.data;
      Api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      setUser(userResponse);

      localStorage.setItem("@Kenzie:token", token);
      localStorage.setItem("@Kenzie:userId", response.data.user.id);

      console.log(response);
      setName(response.data.user.name);
      setToken(response.data.token);

      navigate("/profile");
      return;
    } catch (error) {
      const axiosError = error as AxiosError<IAxios>;
      console.log(axiosError);
    }
  }

  async function getInfoUser() {
    try {
      const id = localStorage.getItem("@Kenzie:userId");
      const response = await Api.get(`/users/${id}`);
      setUser(response.data);
      setTechnology(response.data.techs);
    } catch (error) {
      console.log(error);
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
        submitUser,
        registerUser,
        getUser,
        getInfoUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
