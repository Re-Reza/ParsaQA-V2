import Cookie from "js-cookie";

export function getCookie(name){
    return Cookie.get(name);
}

export function setCookie(name, value, expire = 7){
    Cookie.set(name, value, { expires : expire });
}

export function removeCookie(name){
    Cookies.remove(name);
}