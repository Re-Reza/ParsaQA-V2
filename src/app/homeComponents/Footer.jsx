"use client"

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next"
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import styles from "../../../public/styles/headerFooter.module.scss";

function Footer(props) {

    const { t } = useTranslation("footer");

    const links = {
        col1: [
            { title: t("aboutUsLink"), path: "/" },
            { title: t("team"), path: "/" },
            { title: t("privacy"), path: "/" },
            { title: t("lastQuestions"), path: "/" },
            { title: t("categories"), path: "/" },
            { title: t("virals"), path: "/" },
        ],
        col2: [
            { title: t("virals"), path: "/" },
            { title: t("rulingsQuestions"), path: "/" },
            { title: t("ideologicalQuestions"), path: "/" },
            { title: t("historyQuestions"), path: "/" },
            { title: t("pray1Questions"), path: "/" },
            { title: t("pray2Questions"), path: "/" },
        ],
    };

    return (
        <>
            <footer className={styles["footer"] + " txt-gray2 position-relative"} >
                <img src="/imgs/blueEffect.png" className="blueEffect" style={{ top : props.top}} />
                <div className={styles["footer-contentContainer"]}>

                    <div>
                        <h4 className="mb-4 txt-c-medium txt-large text-white">{t("title")}</h4>
                        <p className="lh-base">{t("description")}</p>
                    </div>
                    
                    <div>
                        <h4 className="mb-4 txt-c-medium text-white">{t("addressTitle")}</h4>
                        <p className="lh-base mb-5">{ t("address") }</p>
                        <div className="mb-3  d-flex align-items-center">
                            <span className="me-3 txt-c-large text-white"><ImPhone /></span>
                            <span>09111169156</span>
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="me-3 txt-c-large text-white"><MdEmail /></span>
                            <span>info@parsaqa.com</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 txt-c-medium text-white">{t("fastLinks")}</h4>
                        <div className="container">
                            <div className="row flex-column flex-sm-row">
                                <ul className="col">
                                    {
                                        links.col1.map((item, index) => <li key={index} className="mb-3"> <Link href={item.path}>{item.title}</Link> </li>)
                                    }
                                    <li className="d-flex mt-4">
                                        <div className={styles["footer-mediaIcon"]}><FiTwitter/></div>
                                        <div className={styles["footer-mediaIcon"]}><BsInstagram/></div>
                                        <div className={styles["footer-mediaIcon"]}><SlSocialLinkedin/></div>
                                        <div className={styles["footer-mediaIcon"]}><BsWhatsapp/></div>
                                    </li>
                                </ul>
                                <ul className="col gy-4">
                                    {
                                        links.col2.map((item, index) => <li key={index} className="mb-3"> <Link href={item.path}>{item.title}</Link> </li>)
                                    }
                                    <li className="mt-4"><img src="/imgs/enamad.png" alt="enamad"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={styles["footer-annotation"]}>کلیه حقوق این سامانه متعلق به عموم محققین عالم تشیع است.</div>

            </footer>
        </>
    )
}


export default Footer;