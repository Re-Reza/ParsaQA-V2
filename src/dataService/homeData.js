import axiosInastance from "./axiosInstance";

export function getLastQuestions(){
    console.log("in this")
    return axiosInastance.get("/questions/latest");
}

export function getCategories(){
    return axiosInastance.get("/categories");
}
