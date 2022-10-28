import { createContext, useEffect, useState } from "react";
import Api from "../Services/api";
export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [technology, setTechnology] = useState([]);
  const [token, setToken] = useState("");
  const [isDelete, setDelete] = useState(false);

  async function submitUser(data) {
    await Api.post("/sessions ", data)
      .then((response) => response)
      .then((response) => {
        console.log("ola mundo", response);
        localStorage.setItem("@Kenzie:token", response.data.token);
        setName(response.user.name);
        setToken(response.data.token);
        Api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      })
      .catch((err) => console.log(err));
  }

  async function registerUser(data) {
    await Api.post("/users", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  async function setTech() {
    const tokenSet = localStorage.getItem("@Kenzie:token");
    Api.defaults.headers.common.Authorization = `Bearer ${tokenSet}`;

    try {
      const response = await Api.get("/profile");
      setTechnology(response.data.techs);
    } catch (error) {
      console.log(error);
    }
  }

  async function addTech(data) {
    await Api.post("/users/techs", data)
      .then((response) => {
        setTech();
      })
      .catch((err) => console.log(err));
  }

  async function RemoveTech(techId) {
    await Api.delete(`/users/techs/${techId}`)
      .then((response) => setDelete(!isDelete))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    setTech();
  }, [isDelete]);

  const contextValues = {
    submitUser,
    registerUser,
    name,
    technology,
    setTech,
    addTech,
    RemoveTech,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
