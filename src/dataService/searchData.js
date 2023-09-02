import axiosInastance from "./axiosInstance";
import axiosInastanceBlue from "./axiosInstanceBlue";

export function provideSearchResult(phrase, page){
    return axiosInastance.get(`search?phrase=${phrase}&page=${page!=null? page : 1}`);
} 

export function autoComplete( data ){
    return axiosInastanceBlue.post("autocomplete", data)
}