import axios from "axios";

const axiosInastance = axios.create({
    baseURL : "https://api.parsaqa.com/api/v1/",
    timeout : 15000,
    headers : {
        "Content-Type" : "application/json"
    }
});

// axiosInastance.defaults.withCredentials = true;

export default axiosInastance;