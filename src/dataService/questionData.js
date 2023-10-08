import axiosInastance from "./axiosInstance";
import { getCookie } from "./cookieProvider";

export function getQuestionContent(id){
    return axiosInastance.get(`questions/${id}`);
}

export function provideSimilarQuestions(id){
    return axiosInastance.get(`questions/${id}/similar`);
}

export function voteQuestion(questionId, weight) {
    console.log(questionId);
    console.log(`Bearer ${getCookie("auth_token") }`);
    return axiosInastance.post(`questions/${questionId}/votes`,{
        weight
    }, {
        headers : {
            "Authorization" : `Bearer ${getCookie("auth_token")}`
        }
    });
}

export function voteAnswer(questionId, answerId, weight) {
    console.log(questionId)
    console.log(answerId)
    console.log(weight) 
    return axiosInastance.post(`questions/${questionId}/answers/${answerId}/votes`,{
        weight
    }, {
        headers : {
            "Authorization" : `Bearer ${getCookie("auth_token")}`
        }
    });
}

export function answerQuestion(questionId, data) { 
    return axiosInastance.post(`questions/${questionId}/answers`, data, {
        headers : {
            "Authorization" : `Bearer ${getCookie("auth_token")}`
        }
    });
}