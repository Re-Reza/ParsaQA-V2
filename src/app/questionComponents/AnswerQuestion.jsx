import React from "react";

import styles from "../../../public/styles/question.module.scss";

function AnserQuestion(){

    return(
        <div>
            <div className="txt-gray3 txt-c-large fs-4 mt-5 mb-4">پاسخ دادن</div>
            <div className="row gx-4">
                <div className="col"><input className={styles["newQuestion-input"] + " w-100 mb-3"} placeholder="نام" type="text" /></div>
                <div className="col"><input className={styles["newQuestion-input"] + " w-100 mb-3"} placeholder="شماره موبایل (الزامی)" type="text" /></div>
            </div>
            <textarea placeholder="پاسخ خود را اینجا درج کنید" className={styles["newQuestion-input"] + " w-100 mb-3"} rows="10"></textarea>
            <div className="d-flex justify-content-end">
                <button className={styles["cancleBtn"] + " me-3"}>انصراف</button>
                <button className={styles["newQuestionBtn"]}>ثبت پاسخ</button>
            </div>
        </div>
    )
}

export default AnserQuestion;