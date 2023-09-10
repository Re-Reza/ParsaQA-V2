
"use client"
import React from "react";

import Link from "next/link";
import Header from "../../homeComponents/Header";
import Footer from "../../homeComponents/Footer";
import Form from "react-bootstrap/Form";
import Input from "../Input";
import { BiLogIn } from "react-icons/bi";
import { HiOutlineKey } from "react-icons/hi";
import styles from "../../../../../public/styles/signinUp.module.scss";

function Confirm() {

    const inputList = [
        { label: "کد تایید", icon: <BiLogIn />, type: "" },
        { label: "گذرواژه", icon: <HiOutlineKey />, type: "password" },
        { label: "تکرار گذرواژه", icon: <HiOutlineKey />, type: "password" }
    ];
//validation
    return (
        <>
            
            <div className="mainContentContainer" style={{ paddingBottom: "9em" }}>
                <Header isAboutUs={true} showSearch={false} />
                <div className="d-flex align-items-start mt-5">
                    <div className={styles["law-warns"]}>
                            <h4 className="txt-gray3 txt-c-large mb-5 text-center">قوانین و شرایط استفاده از سایت پارسا</h4>
                            <p className="txt-gray fw-400 lh-lg">
                            پارسا یک موتور جستوگر محتواست که توسط شرکت داده کاوی هوشمند ویرا توسعه یافته است. شرایط استفاده از سایت عبارتست از:
    پارسا تنها محتواهای تولید شده در سایت های دیگر را جستجو کرده و به نمایش میگذارد، از این رو، مسیولیتی در قبال صحت محتواهای تولید شده ندارد و پیگرد قانونی شامل آن نمی شود.
    موتور جستجوی پارسا برای جستجو مبلغی از کاربر دریافت نمی کند و هرگونه سواستفاده مالی به محصول پارسا ارتباطی ندارد.
    رعایت کپی رایت برای استفاده کنندگان از سایت پارسا،  شرعا و اخلاقا الزامی است، به این معنی که در صورت استفاده از محتوای این سایت، انتظار می رود تا منبع آن (سایت پارسا) اشاره گردد.
                            </p>
                    </div>

                    <div >
                        <div className="d-flex flex-column" style={{ width: "52%" }}>

                            <p className=" text-center lh-base txt-gray3 txt-c-normal mb-5">کد تایید عضویت به ایمیل شما ارسال شده است، لطفا آنرا در کادر زیر وارد کرده، سپس گذرواژه انتخاب نمایید</p>
                            {
                                inputList.map((item, index) => <div className="mb-4"><Input key={index} type={item.type} label={item.label} icon={item.icon} /></div>)
                            }
                            <div className="d-flex justify-content-between mt-3">
                                <div className="txt-gray3">
                                    <Form.Check
                                        type="switch"
                                        label="مرا به خاطر بسپار"
                                        id="remmeberme"
                                    />
                                </div>
                                <div role="button" className="txt-darkBlue">ارسال مجدد کد تایید</div>
                            </div>

                            <button className={styles["signinBtn"]}>عضویت</button>

                            <div className="text-center d-flex mt-4 fw-500">
                            
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" />
                                </div>
                                <div className="lh-base">
                                    با ایجاد حساب کاربری، <span className="txt-lightBlue" role="button">قوانین و شرایط استفاده</span> از سایت را می پذیرم و رعایت میکنم
                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>
            </div>
            <Footer top={"-123%"} />
        </>
    )
}

export default Confirm;