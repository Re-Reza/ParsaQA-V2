import axios from "axios";

const axiosInastance = axios.create({
    baseURL : "https://api.parsaqa.com/api/v1/",
    timeout : 10000,
    headers : {
        "Content-Type" : "application/json"
    }
});

// axiosInastance.defaults.withCredentials = true;

export default axiosInastance;