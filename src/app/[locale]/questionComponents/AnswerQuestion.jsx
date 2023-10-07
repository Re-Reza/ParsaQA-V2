"use client"

import React from "react";
import { useTranslations } from "next-intl";
import styles from "../../../../public/styles/question.module.scss";

function AnserQuestion(){

    const t = useTranslations("question");

    return(
        <div>
            <div className="txt-gray3 txt-c-large fs-4 mt-5 mb-4">{t("answering")}</div>
            <div className="row gx-4">
                <div className="col"><input className={styles["newQuestion-input"] + " w-100 mb-3"} placeholder={t("name")} type="text" /></div>
                <div className="col"><input className={styles["newQuestion-input"] + " w-100 mb-3"} placeholder={t("phone")} type="text" /></div>
            </div>
            <textarea placeholder={t("enterAnswer")} className={styles["newQuestion-input"] + " w-100 mb-3"} rows="10"></textarea>
            <div className="d-flex justify-content-end">
                <button className={styles["cancleBtn"] + " me-3"}>{t("cancel")}</button>
                <button className={styles["newQuestionBtn"]}>{t("submit")}</button>
            </div>  
        </div>
    )
}

export default AnserQuestion;