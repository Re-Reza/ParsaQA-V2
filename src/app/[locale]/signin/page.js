"use client";
import React, { useRef, useState } from "react";
import { useRouter  } from "next/navigation"
import { ToastContainer, toast, } from "react-toastify";
import Header from "../homeComponents/Header";
import Footer from "../homeComponents/Footer";
import Input from "../signup/Input";
import { HiOutlineKey } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { sendOnetimeCode, createToken } from "../../../dataService/signinSignUp";
import { setCookie } from "../../../dataService/cookieProvider";
import styles from "../../../../public/styles/signinUp.module.scss";
import 'react-toastify/dist/ReactToastify.css';

function Signin(){
    
    const [ state, setState ] = useState({
        optCodeMode : false,
        codeRecived : true 
    }); 
    
    const { push } = useRouter()

    const phoneRef = useRef(null);
    const otpCode = useRef(null);

    function confirmPhone(){
        if(state.codeRecived) {
            const phone = phoneRef.current;
            return createToken({
                mobile_number : phone.value,
                otp : otpCode.current.value,
                device_name : "p"
            }).then( response => {
                setCookie("auth_token", response.data.token)
                push("/");
            }).catch( err => {
                console.log(err);
                toast.error("کد وارد شده اشتباه است")
            });
        }

        if(state.optCodeMode ) { 
            const phone = phoneRef.current;
            sendOnetimeCode({
                mobile_number : phone.value 
            }).then( response => {
                toast.success("کد یکبار مصرف با موفقیت برای شما ارسال شد");
                setState({
                    ...state, 
                    codeRecived : true
                })
            }).catch( err => {
                console.log(err);
                toast.error("خطایی رخ داده است")
            })
        }
        else {

        }
    }

    let mode = false;
    if( (state.optCodeMode && state.codeRecived ) || state.optCodeMode == false)
        mode = true

    //validation with fomik
    return (
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
            <div className="mainContentContainer" style={{ paddingBottom: "13em" }}>
                <Header showSearch={false} isAboutUs={true}/>
                <div className={"d-flex justify-content-center"+" "+styles["formContainer"]}>
                    <div style={{ minWidth: "30%" }}>
                        <h1 className="txt-c-large text-center mb-5" style={{ fontSize: "1.5em" }}>ورود کاربر</h1>
                        <div className="mb-4">
                            <Input refInput={phoneRef} icon={<FiMail/>} label={"شماره موبایل"} type={"text"} />
                        </div>
     
                        <div className="mb-4">
                            { 
                                state.optCodeMode ? 
                                ( state.codeRecived ? <Input refInput={otpCode} icon={<HiOutlineKey/>} label={"کد یکبار مصرف"} type={"password"} /> : <></>)
                                :
                                <Input icon={<HiOutlineKey/>} label={"گذرواژه"} type={"password"} />
                            }
                        </div>
                        <button className={styles["signinBtn"]} onClick={confirmPhone}>{ mode ? "ورود" : "دریافت کد"}</button>
                       
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-between mt-5">
                                <button className="txt-lightBlue fw-40">عضویت رایگان</button>
                                <button className="txt-lightBlue fw-40">فراموشی گذرواژه</button> 
                            </div>
                            <button role="button" onClick={()=>setState({...state, codeRecived : false, optCodeMode : !state.optCodeMode})} className="txt-lightBlue mt-4 fw-40 justify-self-center">{state.optCodeMode ? "ورود با گذرواژه": "ورود با رمز یکبار مصرف" }</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer top={"-123%"} />
        </>
    )
}

export default Signin;