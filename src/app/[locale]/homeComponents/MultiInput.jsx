"use client"

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { IoClose } from "react-icons/io5";
import { IoMdAdd} from "react-icons/io";
import styles from "../../../../public/styles/headerFooter.module.scss";

function MultiInput({ keyName, list, addItem, removeItem }){


    const t = useTranslations("header");

    function callRemoveItem(item){
        removeItem(item, keyName);
    }

    const inputRef = useRef(null);
    const containerRef= useRef(null);

    function callAddItem(add, event){
        const value =  inputRef.current.value.trim();
        if( event.keyCode == 13 || add)
            if( value != ""  )
            {
                inputRef.current.value = "";
                addItem(keyName, value);
            }
            
    }

    function focusIn(){
        containerRef.current.classList.add("showHover")
    }

    function focusOut(){
        containerRef.current.classList.remove("showHover")
    }

    return(
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="me-4 mb-3 mb-md-0  txt-gray3 fw-500">   
                <label>{t(keyName)}</label> 
                <br/>
            </div>
            <div ref={containerRef} className={styles["multiSelectContainer"]}>
                {
                    list.length > 0 ?
                        <ul className={styles["multiSelectList"]}>
                        {
                            list.map((item, index) => <li className={styles["inputOption"]} key={index}>
                                <span role="button" onClick={()=>callRemoveItem(item)} className="me-1"><IoClose/></span>
                                <span>{item}</span>
                            </li>)
                        }
                    </ul>:
                <></>
                }
                <div>
                    <input onFocus={focusIn} onBlur={focusOut} ref={inputRef} type="text" onKeyDown={()=>callAddItem(false, event)}/>
                    <span role="button" className="txt-c-medium txt-gray3 btn" onClick={(event) => callAddItem(true, event)}><IoMdAdd/></span>
                </div>
            </div>
        </div>
    )
}

export default MultiInput;
