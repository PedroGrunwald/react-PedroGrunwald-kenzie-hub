import axios from "axios";

const Api = axios.create({
    baseURL : "https://kenziehub.herokuapp.com",
    timeout: 5000,
    token: localStorage.getItem("@Kenzie:token")
})

Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("@Kenzie:token");

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
);

export default Api