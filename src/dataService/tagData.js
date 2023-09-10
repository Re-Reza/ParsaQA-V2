import axiosInastanceBlue from "./axiosInstanceBlue";

export function getTagQuestions(data){
    return axiosInastanceBlue.post("/search/tag", data); 
}