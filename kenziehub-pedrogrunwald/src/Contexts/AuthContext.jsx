import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Api from "../Services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [technology, setTechnology] = useState([]);
  const [token, setToken] = useState("");
  const [isDelete, setDelete] = useState(false);

  async function submitUser(data) {
    await Api.post("/sessions ", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("@Kenzie:token", response.data.token);
        setName(response.user.name);
        setToken(response.data.token);
        Api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        return;
      })
      .catch((err) => console.log(err));
  }

  async function getUser() {
    setToken(localStorage.getItem("@Kenzie:token"));

    Api.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log();
    try {
      const response = await Api.get("/profile");
      console.log(response.data);
       setTechnology(response.data.techs);
      await setName(response.data.name);
      console.log(name);
    } catch (error) {
      console.log(error);
    }
console.log("saiu");
  }

  async function registerUser(data) {
    await Api.post("/users", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  async function setTech() {
    console.log("pegou");
    return;
  }

  async function addTech(data) {
    await Api.post("/users/techs", data)
      .then((response) => {
        setTechnology((old)=>[...old,response.data])
        console.log(response)
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
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
