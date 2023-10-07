import axiosInastance from "./axiosInstance";

export function provideSearchResult(data){
    // return axiosInastance.post(`search/simple?phrase=${phrase}&page=${page!=null? page : 1}`);
    console.log(data);
    return axiosInastance.post(`search/simple`, data);
} 

export function provideMarjas(){
    return axiosInastance.get("marjas");
}

export function provideAllSources(){
    return axiosInastance.get("sources");
}

export function provideAllTags(){
    return axiosInastance.get("tags");
}

export function advancedSearch(data){
    return axiosInastance.post()
}

export function autoComplete( data ){
    return axiosInastance.post("autocomplete", data);
}

export function voiceSearch(data) {
    console.log(data);
    return axiosInastance.post("search/voice", data, {
        headers : { 
            "content-type": "multipart/form-data",
        }
    });
}

