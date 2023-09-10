"use client";

import React, { useState } from "react";
import { useParams, useRouter, usePathname } from "next/navigation";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { setCookie, getCookie } from "../../../dataService/cookieProvider";
import styles from "../../../../public/styles/headerFooter.module.scss"

function HeaderLanguage(){
    const languages = [
        { title : "فارسی", icon : "/iran.png", key : "fa"},
        { title : "عربی", icon : "/arabic.png", key : "ar"},
        { title : "English", icon : "/english.png", key : "en"}
    ] 

    const { push, replace } = useRouter();
    const { locale } = useParams();
    const path = usePathname();
    const [ state, setState ] = useState({
        open : false,
    });

    function setActive(key){
        // console.log(locale)
        // console.log(path)
        // const newPath = path.replace(locale, key);
        // console.log(newPath)
        // push(newPath);
        push(`/${key}`);
    } 

    let activeLang;
    languages.map((item, index) => {
        if( item.key == locale )
            activeLang = index;
    })

    return(
        <div>
            <div onClick={()=> setState({...state, open: !state.open})} className="d-flex align-items-center ms-1 ms-sm-4" role="button">
                <span className="me-1 fs-3"> <MdKeyboardArrowDown/> </span>
                <span className="me-1 me-1 d-none d-sm-block">{languages[activeLang].title}</span>
                <img style={{width:"30px"}} src={"/imgs"+ languages[activeLang].icon } alt="icon" />
            </div>
            {
                state.open ? 
                    <ul className={styles["languagesList"]}>
                    {
                        languages.map((item, index) => <li key={index} role="button" className={styles["languageItem"]+" d-flex mb-2 align-items-center"} onClick={()=>setActive(item.key)}>
                            <span className="me-2">{item.title}</span>
                            <img style={{width:"30px"}} src={"/imgs"+item.icon} alt={item.title} />
                        </li>)
                    }
                    </ul>
                :<></>
            }
        </div>
    )
}

export default  HeaderLanguage;