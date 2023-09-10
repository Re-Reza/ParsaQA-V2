import axiosInastance from "./axiosInstance";

export function getLastQuestions(){
    return axiosInastance.get("/questions/latest");
}

export function getCategories(){
    return axiosInastance.get("/categories");
}
