import { createContext,useState } from "react";
import Api from "../Services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [technology, setTechnology] = useState([]);
  const [token, setToken] = useState("");

  function submitUser(data) {
    Api.post("/sessions ", data)
      .then((response) => response.data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("@Kenzie:token", response.token);
        setName(response.user.name);
        console.log(name);
        setToken(response.token);
      })
      .catch((err) => console.log(err));
  }

  function registerUser(data) {
    Api.post("/users", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  function SetTechno(){
    Api.get("/profile")
    .then((response) => {
      console.log(response)
      setTechnology(response.data.techs)
    })
  }

  function AdTech(data){
    Api.post("/users/techs",data)
    .then((response) =>{
      SetTechno()   
    })
    .catch((err) => console.log(err))
  }

  function RemoveTech(techId){
    Api.delete(`/users/techs/${techId}`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
  }

const contextValues = { submitUser, registerUser, name, technology,SetTechno,AdTech,RemoveTech }

  return (
    <AuthContext.Provider
      value={contextValues}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
