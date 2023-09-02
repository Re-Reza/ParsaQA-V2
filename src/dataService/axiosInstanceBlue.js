import axios from "axios";

const axiosInastanceBlue = axios.create({
    baseURL : "https://blue.parsaqa.com/api/v1/",
    timeout : 10000,
    headers : "application/json" 
});


export default axiosInastanceBlue;