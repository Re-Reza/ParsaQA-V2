import axiosInastance from "./axiosInstance";

export function getQuestionContent(id){
    return axiosInastance.get(`questions/${id}`);
}