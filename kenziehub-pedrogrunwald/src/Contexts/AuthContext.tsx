import { removeObject } from "../utils/removeObject";
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";
import Api from "../Services/api";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ITech } from "../Contexts/UserContext";
import { AxiosError } from "axios";
interface AuthContextInterface {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  setTech: Dispatch<SetStateAction<string>>;
  addTech: (data: any) => void;
  RemoveTech: (data: number | string) => void;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

interface Props {
  children?: ReactNode;
}

interface UserProps {
  avatar_url: string;
  bio: string;
  contact: number;
  course_module: string;
  created_at: number;
  email: string;
  id: number;
  name: string;
  title: string;
  status: string;
}

interface ITechAdd {
  title: string;
  status: string;
}

interface ItechResponse {
  status: string;
  message: string;
}

export interface IAxios {
  status: string;
  message: string;
}

const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [technology, setTechnology] = useState<ITech[]>([]);
  const [token, setToken] = useState<string>("");
  const [isDelete, setDelete] = useState<boolean>(false);

  async function setTech() {
    return;
  }

  async function addTech(data: ITechAdd) {
    try {
      const response = await Api.post<ITech>("/users/techs", data);
      setTechnology((old) => [...old, response.data]);
      console.log(response);
    } catch (error) {
      const axiosError = error as AxiosError<IAxios>;
      console.log(axiosError);
    }
  }

  async function RemoveTech(techId: number | string) {
    try {
      await Api.delete(`/users/techs/${techId}`);
      const test = removeObject(technology, techId);
      setTechnology(test);
      setDelete(!isDelete);
    } catch (error) {
      const axiosError = error as AxiosError<IAxios>;
      console.log(axiosError);
    }
  }
  useEffect(() => {
    setTech();
  }, [isDelete]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        name,
        setName,
        setTech,
        addTech,
        RemoveTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
