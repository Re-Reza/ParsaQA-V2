"use client";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { IoMdAttach } from "react-icons/io";
import styles from "../../../../public/styles/question.module.scss";

function AddNewQuestion() {

    const [state, setState] = useState({
        tags: []
    });

    return (
        <div className="d-flex flex-column">

            <input type="text" className={styles["newQuestion-input"] + " mb-3"} placeholder="عنوان سوال" />

            <textarea className={styles["newQuestion-input"] + " mb-3"} cols="30" rows="10" placeholder="متن سوال را اینجا بنویسید"></textarea>

            <div className="d-flex flex-column">
                <input type="text" className={styles["newQuestion-input"] + " mb-3"} placeholder="تگ (حداکثر 5 کاراکتر)" />
                <ul>
                    {
                        state.tags.map((item, index) => <li key={index}>{item.tagTitle}</li>)
                    }
                </ul>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <Form.Select defaultValue="0">
                    <option value="0">دسته بندی</option>
                    <option value="1">احکام</option>
                    <option value="2">قرآن کریم</option>
                    <option value="3">تاریخ وسیره</option>
                    <option value="4">اخلاق و تربیت اسلامی</option>
                    <option value="5">اجتماعی سیاسی</option>
                </Form.Select>

                <div style={{ width: "25%" }} className="d-flex justify-content-end">
                    <input className="d-none" type="file" id="fileInput" />
                    <label htmlFor="fileInput" style={{ color: "#3182CE" }} role="button">
                        <span className="txt-c-large" ><IoMdAttach /></span>
                        افزودن عکس
                    </label>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <button className={styles["cancleBtn"] + " me-3"}>انصراف</button>
                <button className={styles["newQuestionBtn"]}>ثبت پرسش</button>
            </div>

        </div>
    )
}

export default AddNewQuestion;