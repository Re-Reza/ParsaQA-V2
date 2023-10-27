"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ToastContainer, toast, } from "react-toastify";
import { getCookie, removeCookie } from "../../../dataService/cookieProvider";
import { getUserInfo, deleteToken } from "../../../dataService/homeData";
import { IoExitOutline } from "react-icons/io5"
import styles from "../../../../public/styles/headerFooter.module.scss";
import 'react-toastify/dist/ReactToastify.css';

export default function SigninSignUp(){

    const [ state, setState ] = useState({
        authenticated : false,
        id : null,
        full_name: null,
        mobile: null
    });

    const t = useTranslations("header");

    useEffect(() => {
        const token = getCookie("auth_token");
        if( token ) {
            getUserInfo(token).then( response => {
                setState({
                    authenticated : true,
                    id : response.data.data.id,
                    full_name : response.data.data.full_name,
                    mobile : response.data.data.mobile_number
                });
            }).catch( err => {});
        }

    }, []);

    function exitAccount(){
        const token = getCookie("auth_token");

        if(token){
            deleteToken(token).then(response => {
                toast.success("با موفقیت خارج شدید");
                removeCookie("auth_token");
                setState({
                    authenticated : false,
                    id: null,
                    mobile : null,
                    full_name : null
                });
            }).catch(err=> {
                toast.error("خطایی رخ داده است")
            });
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnHover
            />
            <div className="txt-darkBlue mb-2 mb-sm-0 txt-c-normal d-flex lh-base text-center position-relative" >
            {
                state.authenticated ? 
                <>
                    <div className={styles["userImg"]+" d-flex"}>
                        <Image
                            src="/imgs/userIcon.png"
                            width={55}
                            height={55}
                            className={styles["userImgProfile"]}
                            alt="user image"
                        />
                       <div className={styles["userInfoContainer"]}>
                            <div className="text-center">
                                <div className="mb-2">{state.full_name}</div>
                                <div className="mb-2">{state.mobile}</div>
                            </div>
                            <div role="button" onClick={exitAccount}>
                                {t("exit")} <IoExitOutline />
                            </div>
                        </div>
                    </div>
                </>
                :   
                <>
                    <span className="me-2"><Link href="/signin">{t("signin")}</Link></span>
                    /
                    <span className="ms-2"><Link href="/signup">{t("signup")}</Link></span>
                </>
            }
            </div>
        </>
    )
}