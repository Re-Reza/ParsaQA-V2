"use strict";

import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "../../../public/styles/headerFooter.module.scss"

function HeaderLanguage(){
    const languages = [
        { title : "فارسی", icon : "/iran.png"},
        { title : "عربی", icon : "/arabic.png"},
        { title : "english", icon : "/english.png"}
    ] 

    const [ state, setState ] = useState({
        open : false,
        active : 0,
    });

    function setActive(index){
        setState({
            ...state, 
            open : false,
            active : index
        })
    } 

    return(
        <div>
            <div onClick={()=> setState({...state, open: !state.open})} className="d-flex align-items-center ms-1 ms-sm-4" role="button">
                <span className="me-1 fs-3"> <MdKeyboardArrowDown/> </span>
                <span className="me-1 me-1 d-none d-sm-block">{languages[state.active].title}</span>
                <img style={{width:"30px"}} src={"/imgs"+languages[state.active].icon} alt="icon" />
            </div>
            {
                state.open ? 
                    <ul className={styles["languagesList"]}>
                    {
                        languages.map((item, index) => <li role="button" className={styles["languageItem"]+" d-flex mb-2 align-items-center"} onClick={()=>setActive(index)}>
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