import React from "react";

import Link from "next/link";
import Header from "../homeComponents/Header";
import Footer from "../homeComponents/Footer";
import Input from "./Input";
import { AiOutlineMail } from "react-icons/ai"; 
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import styles from "../../../public/styles/signinUp.module.scss";

function Signup() {

    return (
        <>
            <div className="mainContentContainer" style={{ paddingBottom: "9em" }}>
                <Header showSearch={false} isAboutUs={true}/>

                <div className="d-flex justify-content-center mt-4">

                    <div className="d-flex flex-column" style={{ minWidth: "30%" }}>

                        <h1 className="txt-c-large text-center mb-5" style={{ fontSize: "1.5em" }}>عضویت کاربر</h1>
                        <Input type="text" label="آدرس ایمیل یا شماره موبایل" icon={<AiOutlineMail />} />
                        <button className={styles["signinBtn"]}>ادامه</button>
        
                        <div>
                            <div className="d-flex justify-content-center mt-4 mb-3">
                                <div role="button" className={styles["loginOptionContainer"] + " txt-darkBlue me-3"}>
                                    <BsLinkedin />
                                </div>
                                <div role="button" className={styles["loginOptionContainer"]}>
                                    <FcGoogle />
                                </div>
                            </div>
                            <div className="txt-lightBlue text-center mt-4"><Link href="/">ورود به حساب کاربری </Link></div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer top={"-123%"} />
        </>
    )
}

export default Signup;