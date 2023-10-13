"use client"

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { answerQuestion } from "../../../dataService/questionData";
import { ToastContainer, toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../../../public/styles/question.module.scss";

function AnserQuestion(props){

    const t = useTranslations("question");
    const nameRef = useRef(null); 
    const phoneRef = useRef(null); 
    const textRef = useRef(null); 

    function sendNewAnswer(){
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const text = textRef.current.value;
        if( name == "" || phone == "" || text == "")
        {
            toast.error("لطفا همه فیلدها را پر کنید")
        }
        else{
            answerQuestion(props.id, {
                content: text
            }).then( response => {
                console.log(response);
                toast.success("پاسخ شما با موفقیت ثبت شد");
                clear();
            }).catch(err => {
                console.log(err)
                toast.error("خطایی رخ داده است")
            })
        }
    }

    function clear(){
        nameRef.current.value = "";
        phoneRef.current.value = "";
        textRef.current.value = "";
    }

    return(
        <>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                // hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnHover
                // theme="light"
            />
            <div>
                <div className="txt-gray3 txt-c-large fs-4 mt-5 mb-4">{t("answering")}</div>
                <div className="row gx-4">
                    <div className="col"><input className={styles["newQuestion-input"] + " w-100 mb-3"} placeholder={t("name")} ref={nameRef} type="text" /></div>
                    <div className="col"><input className={styles["newQuestion-input"] + " w-100 mb-3"} placeholder={t("phone")} ref={phoneRef} type="text" /></div>
                </div>
                <textarea ref={textRef} placeholder={t("enterAnswer")} className={styles["newQuestion-input"] + " w-100 mb-3"} rows="10"></textarea>
                <div className="d-flex justify-content-end">
                    <button onClick={clear} className={styles["cancleBtn"] + " me-3"}>{t("cancel")}</button>
                    <button onClick={sendNewAnswer} className={styles["newQuestionBtn"]}>{t("submit")}</button>
                </div>  
            </div>
        </>
    )
}

export default AnserQuestion;