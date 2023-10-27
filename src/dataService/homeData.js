import axiosInastance from "./axiosInstance";
import moment from "jalali-moment";


export function getLastQuestions(language){
    const date = moment().format("YYYY-MM-DD");
    return axiosInastance.get(`/questions/recommended?filter[]=language,${language}&filter[]=created_at,${date}`);
}

export function getCategories(level){
    return axiosInastance.get(`categories?level=${level}`);
}

export function getHadis(){
    return axiosInastance.get("/hadis/rooz");
}

export function checkToken(token){
    return axiosInastance.get("tokens/check", {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    });
}

export function getUserInfo(token){
    return axiosInastance.get("user", {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    });
}

export function deleteToken(token){
    console.log(token)
    return axiosInastance.delete("tokens/1", {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    });
}