import axiosInastance from "./axiosInstance";


export function sendOnetimeCode(data){
    return axiosInastance.post("auth/request/mobile/otp", data)
}

export function createToken(data){
    return axiosInastance.post("tokens/with/mobile/otp", data);
}