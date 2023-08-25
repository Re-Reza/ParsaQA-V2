import axios from "axios";

const axiosInastance = axios.create({
    baseURL : "http://85.185.67.214/api/v1/",
    timeout : 10000,
    // headers: {
    //     'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    //   },
    // withCredentials: true
    headers : "application/json" 
});

// axiosInastance.defaults.withCredentials = true;

export default axiosInastance;