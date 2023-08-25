import axiosInastance from "./axiosInstance";

export function provideSearchResult(phrase){
    return axiosInastance.get(`search?phrase=${phrase}`);
}