"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../../../../../public/styles/dashboard.module.scss";

function Settings() {

    const [ state, setState ] = useState({
        activeCategory : 0
    });
    // const switchList = {
    //     group1: [
    //         { title: "پروفایل خصوصی باشد", id: "privateProfile", },
    //         { title: "دریافت آلارم پاسخ جدید", id: "newAnswerAlarm", },
    //         { title: "دریافت سوالات جدید از دسته بندی های زیر", id: "newQuestionOfCategories", }
    //     ],
    //     group2: [
    //         { title: "دریافت آلارم دنبال شدن", id: "followAlarm", },
    //         { title: "دریافت آلارم پیام جدید", id: "messageAlarm", },
    //         { title: "دریافت آلارم سطوح عضویت", id: "memberLevelAlarm", }
    //     ]
    // }

    const categoryList = [
        { title : "نماز", id : 0 },
        { title : "حجاب", id : 1 },
        { title : "قرآن", id : 2 },
        { title : "جوان", id : 3 }
    ]

    return (
        <div>

            <div className="row txt-muted mb-4">
                <div className="col"><input placeholder="آدرس ایمیل" className={styles["input"] + " w-100"} /></div>
                <div className="col"><input placeholder="شماره موبایل (الزامی)" className={styles["input"] + " w-100"} /></div>
            </div>

            <div className="row txt-muted mb-5">
                <div className="col"><input placeholder="نام کاربری " className={styles["input"] + " w-100"} /></div>
                <div className="col"><input placeholder="گذرواژه " className={styles["input"] + " w-100"} /></div>
                <div className="d-flex justify-content-end mt-4"><button style={{color: "#3182CE"}}>تغییر گذرواژه</button></div>
            </div>

            <div className="row" style={{marginBottom : "6em"}}>

                <div className="col d-flex justify-content-between align-items-center">
                    <div>
                        <div className="mb-4">پروفایل خصوصی باشد</div>
                        <div className="mb-4">دریافت آلارم پاسخ جدید</div>
                        <div className="mb-4">دریافت سوالات جدید از دسته بندی های زیر</div>
                    </div>

                    <div>
                        <div className="form-check form-switch mb-4">
                            <input className="form-check-input" type="checkbox" role="switch" />
                        </div>
                        <div className="form-check form-switch mb-4">
                            <input className="form-check-input" type="checkbox" role="switch" />
                        </div>
                        <div className="form-check form-switch mb-4">
                            <input className="form-check-input" type="checkbox" role="switch" />
                        </div>
                    </div>
                </div>

                <div className="col d-flex justify-content-between align-items-center">
                    <div>
                        <div className="mb-4">دریافت آلارم دنبال شدن</div>
                        <div className="mb-4">دریافت آلارم پیام جدید</div>
                        <div className="mb-4">دریافت آلارم سطوح عضویت</div>
                    </div>

                    <div>
                        <div className="form-check form-switch mb-4">
                            <input className="form-check-input" type="checkbox" role="switch" />
                        </div>
                        <div className="form-check form-switch mb-4">
                            <input className="form-check-input" type="checkbox" role="switch" />
                        </div>
                        <div className="form-check form-switch mb-4">
                            <input className="form-check-input" type="checkbox" role="switch" />
                        </div>
                    </div>
                </div>

                <ul className="d-flex justify-content-start">
                {
                    categoryList.map((item, index) => <li className={styles["tag"]+" "+(state.activeCategory == item.id ? styles["activeCategory"] : "" )} key={index}>
                        <span className="me-2" role="button"><AiOutlineClose/></span>
                        <span>{item.title}</span>
                    </li>)
                }
                </ul>

            </div>

            <div className="d-flex justify-content-between mt-5">
                <div>
                    <button className={styles["deleteAccount"]}>حذف حساب کاربری </button>
                </div>
                <div>
                    <button className={styles["sendMessage"] + " me-3"} style={{ width: "max-content", paddingRight: "3em", paddingLeft: "3em" }}>انصراف</button>
                    <button className={styles["follow"]} style={{ width: "max-content", paddingRight: "3em", paddingLeft: "3em" }}>تنظیم کن</button>
                </div>
            </div>

        </div>
    )
}

export default Settings;