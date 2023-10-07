import axiosInastance from "./axiosInstance";
import moment from "jalali-moment";

export function getLastQuestions(language){
    const date = moment().format("YYYY-MM-DD");
    return axiosInastance.get(`/questions/recommended?filter[]=language,${language}&filter[]=created_at,${date}`);
}
// 2023-02-12

export function getCategories(level){
    return axiosInastance.get(`categories?level=${level}`);
}

export function getHadis(){
    return axiosInastance.get("/hadis/rooz");
}
