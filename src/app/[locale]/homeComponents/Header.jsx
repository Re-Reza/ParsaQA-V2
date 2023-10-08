'use client';

import React, { useState, useEffect } from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import HeaderCategory from "./HeaderCategory";
import { IoDownloadOutline } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import HeaderLanguage from "./HeaderLanguage";
import { Spin as Hamburger } from 'hamburger-react';
import { useTranslations } from 'next-intl';
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../../../public/styles/headerFooter.module.scss";


function Header(props) {

    const pathname = usePathname();
    const t = useTranslations("header");
    const { locale } = useParams();

    const splitedPath = pathname.split("/");
    const pathList = splitedPath.length == 2 ? splitedPath : splitedPath.slice(1, splitedPath.length);    

    const links = [
        { path: "", title: t("homeLink") },
        // { path: "/", title: t("productLink") },
        { path: "about-us", title: t("aboutUsLink") },
        { path: "contact-us", title: t("cantactUsLink") }
    ];

    const [ state, setState ] = useState({
        showlinkMenu : false,
    });

    useEffect(() => {
        AOS.init({
            once : true
        });
      }, []);

    function showHamMenu(){
        setState({
            showlinkMenu : !state.showlinkMenu 
        });
    }

    return (
        <>
            <img src="/imgs/purpleEffect.png" className="pupleEffect" />
            <header className={styles["header"]}>
                <nav className="d-flex justify-content-between align-item-center">
                    
                    <div className="d-flex align-items-center position-relative">
                        <button onClick={showHamMenu} className={styles["hamburgerBtn"]+" ms-2 me-sm-4"}><Hamburger/></button>
                        <div className="me-5"><img style={ locale == "en" ? {transform : "rotateY(180deg)"}: {} } className={styles["logoImg"]} src="/imgs/logoParsa.png" alt="logo-parsa" /></div>
                        <ul className={styles["navLinks"]+" d-flex me-5"}>
                            {
                                links.map((item, index) => <li className={"me-3 fw-500 " + (pathList.includes(item.path) ? styles["active-link"] : "")} key={index}><Link href={"/"+item.path}>{item.title}</Link></li>)
                            }
                            
                            <li className="position-relative">
                                <Link className={"me-3 fw-500 " + ( pathList.includes("/categories") ? styles["active-link"] : "")} href="/categories">{t("categories")}</Link>
                                {/* <HeaderCategory /> */}
                            </li>
                        </ul>
                        {
                            state.showlinkMenu ? 
                            <ul className={styles["mobileLinks"]}>
                            {
                                links.map((item, index) => <li className={styles["mobileLinks-item"]} key={index}>
                                        <div style={{padding : ".5em 1em"}} className={ pathList.includes(item.path) ? styles["activeLink-mobile"] : ""}><Link href={"/"+item.path}>{item.title}</Link></div>
                                    </li>)
                                }
                            </ul> : <></>
                        }
                    </div>

                    <div className="d-flex justify-content-center flex-wrap align-items-center position-relative">
                        {/* <button className={styles["installBtnMobile"]}><IoDownloadOutline/></button> */}
                        <button className={styles["installBtn"]+ " me-3"}><span className="txt-c-large me"><IoDownloadOutline/></span> <span className={styles["installText"]}>{t("installBtn")}</span></button>
                        <div className="txt-darkBlue txt-c-normal lh-base text-center" style={{ paddingBottom : ".4em" }}>
                            <span className="me-2"><Link href="/signin">{t("signin")}</Link></span>
                            /
                            <span className="ms-2"><Link href="/signup">{t("signup")}</Link></span>
                        </div>
                        <HeaderLanguage/>
                    </div>

                </nav>

                {
                    props.isAboutUs ? <></> :
                    props.isDashboard ?
                    <div className={styles["dashBoardHead"]+" mt-4"}>
                        <span className={styles["penContainer"]}><BiSolidPencil /></span>
                        <div>
                            <span className="position-relative" style={{left:"-81%", bottom:"-66px"}}>
                                <span className={styles["penContainer2"]}><BiSolidPencil /></span>
                                <img src="/imgs/profile.png" className="ms-1" alt="proile-img" />
                            </span>
                        </div>
                    </div> :
                    <>
                        <h2 data-aos="fade-up" data-aos-duration="1500" className={"text-center mb-4 mt-4 lh-base " + styles["header-title"]}>
                            <span className="txt-darkBlue">{t("titleP1")}</span>
                            &nbsp;
                            {t("titleP2")}
                        </h2>
                        {
                            props.showSearch == false ? <></> : <HeaderSearch lang={props.lang} question={props.question} />
                        }
                    </>
                }

            </header>
        </>
    )
}


export default Header;