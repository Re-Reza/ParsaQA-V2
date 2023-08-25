"use client";
import React from "react";

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import InputIcon from "react-multi-date-picker/components/input_icon"
import styles from "../../../../../public/styles/dashboard.module.scss";

function Info() {
    // حتما اول برو اطلاعات کا هفتگیتو وارد کن
    return (
        <div>
            <div className="row txt-muted">
                <div className="col"><input placeholder="نام" className={styles["input"] + " w-100"} /></div>
                <div className="col"><input placeholder="نام خانوادگی" className={styles["input"] + " w-100"} /></div>
            </div>

            <div className="row mt-4 txt-muted">
                <div className="col">
                    <select class="form-select" aria-label="Default select example">
                        <option>آقا</option>
                        <option>خانم</option>
                    </select>
                </div>
                <div className="col">
                    <DatePicker
                        containerStyle={{width : "100%", height: "100%"}}
                        render={<InputIcon/>}
                        // title={"تاریخ تولد"}
                        // placeholder={"تاریخ تولد"}
                        calendar={persian}
                        locale={persian_fa}
                        // calendarPosition="bottom-right"
                    />
                </div>
            </div>

            <div className="row mt-4 txt-muted">
                <div className="col">
                    <select class="form-select" aria-label="Default select example">
                        <option>استان</option>
                    </select>
                </div>
                <div className="col">
                    <select class="form-select" aria-label="Default select example">
                        <option>شهر</option>
                    </select>
                </div>
            </div>

            <div className="row mt-4 txt-muted">
                <div className="col">
                    <select class="form-select" aria-label="Default select example">
                        <option>تحصیلات</option>
                    </select>
                </div>
                <div className="col">
                    <select class="form-select" aria-label="Default select example">
                        <option>رشته تحصیلی</option>
                    </select>
                </div>
            </div>

            <textarea className={styles["input"] + " mt-4 w-100"} rows={10} placeholder="معرفی از خود، سوابق یا دیدگاه ها"></textarea>

            <div className="d-flex justify-content-end mt-4">
                <button className={styles["sendMessage"] + " me-3"} style={{ width: "max-content", paddingRight: "3em", paddingLeft: "3em" }}>انصراف</button>
                <button className={styles["follow"]} style={{ width: "max-content", paddingRight: "3em", paddingLeft: "3em" }}>ثبت کن</button>
            </div>

        </div>
    )
}

export default Info;