import axiosInastance from "./axiosInstance";

export function getTagQuestions(data){
    return axiosInastance.post("/search/tag", data); 
}