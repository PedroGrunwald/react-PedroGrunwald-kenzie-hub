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


interface AuthContextInterface {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  submitUser: (data: any) => void;
  getUser: () => void;
  registerUser: (data: any) => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  technology: any;
  setTech: Dispatch<SetStateAction<string>>;
  addTech: (data: any) => void;
  RemoveTech: (data: number) => void;
  user: any;
  loading: boolean;
}

export const authContextDefaults: AuthContextInterface = {
  token: "",
  setToken: () => null,
  submitUser: () => null,
  getUser: () => null,
  registerUser: () => null,
  name: "",
  setName: () => null,
  technology: [],
  setTech: () => null,
  addTech: () => null,
  RemoveTech: (id: number) => null,
  user: {},
  loading: false,
};

export const AuthContext =
  createContext<AuthContextInterface>(authContextDefaults);

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
}

const AuthProvider = ({ children }: Props) => {
  const [name, setName] = useState<string>("");
  const [technology, setTechnology] = useState<any[]>([]);
  const [token, setToken] = useState<string>("");
  const [isDelete, setDelete] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState({});

  async function submitUser(data: UserProps) {
    await Api.post("/sessions ", data)
      .then((response: any) => {
        localStorage.setItem("@Kenzie:token", response.data.token);
        console.log(response);
        setName(response.user.name);
        setToken(response.data.token);
        Api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

        return;
      })
      .catch((err) => console.log(err));
  }

  async function getUser() {
    setToken(localStorage.getItem("@Kenzie:token") ?? "");

    Api.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const response = await Api.get("/profile");
      setTechnology(response.data.techs);
      await setName(response.data.name);
    } catch (error) {}
  }

  // useEffect(() => {
  //   async function loadUser() {
  //     const tokenUser = localStorage.getItem("@Kenzie:token");

  //     if (tokenUser) {
  //       try {
  //         Api.defaults.headers.Authorization = `Bearer ${token}`;

  //         const { data } = await Api.get("/profile");

  //         setUser(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     setLoading(false);
  //   }
  //   loadUser();
  // }, []);

  async function registerUser(data: UserProps) {
    await Api.post("/users", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  async function setTech() {
    return;
  }

  async function addTech(data: UserProps) {
    await Api.post("/users/techs", data)
      .then((response) => {
        setTechnology((old) => [...old, response.data]);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  async function RemoveTech(techId: number) {
    await Api.delete(`/users/techs/${techId}`)
      .then((response) => {
        console.log(response);
        const test = removeObject(technology, techId);
        setTechnology(test);
      })
      .then((response) => setDelete(!isDelete))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    setTech();
  }, [isDelete]);

  const contextValues = {
    token,
    setToken,
    submitUser,
    getUser,
    registerUser,
    name,
    setName,
    technology,
    setTech,
    addTech,
    RemoveTech,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;