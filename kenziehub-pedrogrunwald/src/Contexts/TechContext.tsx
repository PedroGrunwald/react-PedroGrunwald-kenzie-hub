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
import { AxiosError } from "axios";

interface AuthContextInterface {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  setTech: Dispatch<SetStateAction<string>>;
  addTech: (data: any) => void;
  RemoveTech: (data: number | string) => void;
  technology: ITechAdd[];
  setTechnology: Dispatch<SetStateAction<ITechAdd[]>>;
}

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

interface Props {
  children?: ReactNode;
}

interface ITechAdd {
  title: string;
  status: string;
  id: string;
}

export interface IAxios {
  status: string;
  message: string;
}

const AuthProvider = ({ children }: Props) => {
  const [name, setName] = useState<string>("");
  const [technology, setTechnology] = useState<ITechAdd[]>([]);
  const [token, setToken] = useState<string>("");
  const [isDelete, setDelete] = useState<boolean>(false);

  async function setTech() {
    return;
  }

  async function addTech(dataF: ITechAdd) {
    try {
      const { data } = await Api.post<ITechAdd>("/users/techs", dataF);
      setTechnology([...technology, data]);
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
        technology,
        setTechnology,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
