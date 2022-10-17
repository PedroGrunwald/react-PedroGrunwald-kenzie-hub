import axios from "axios";

const Api = axios.create({
    baseURL : "https://kenziehub.herokuapp.com",
    timeout: 5000,
    token: localStorage.getItem("@Kenzie:token")
})

export default Api