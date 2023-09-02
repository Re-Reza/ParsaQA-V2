'use client';
import "../../i18next"
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import HeaderCategory from "./HeaderCategory";
import { IoDownloadOutline } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import HeaderLanguage from "./HeaderLanguage";
import { Spin as Hamburger } from 'hamburger-react';
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../../public/styles/headerFooter.module.scss";
import "../../i18next/index";

function Header(props) {

    const pathname = usePathname();
    const { t } = useTranslation("header");

    const links = [
        { path: "/", title: t("homeLink") },
        { path: "/b", title: t("productLink") },
        { path: "/c", title: t("aboutUsLink") },
        { path: "/d", title: t("cantactUsLink") }
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
                        <div className="me-5"><img className={styles["logoImg"]} src="/imgs/logoParsa.png" alt="logo-parsa" /></div>
                        <ul className={styles["navLinks"]+" d-flex me-5"}>
                            {
                                links.map((item, index) => <li className={"me-3 fw-500 " + (pathname === item.path ? styles["active-link"] : "")} key={index}><Link href={item.path}>{item.title}</Link></li>)
                            }
                            
                            <li className="position-relative">
                                <Link className={"me-3 fw-500 " + (pathname === "/categories" ? styles["active-link"] : "")} href="/categories">{t("categories")}</Link>
                                {/* <HeaderCategory /> */}
                            </li>
                        </ul>
                        {
                            state.showlinkMenu ? 
                            <ul className={styles["mobileLinks"]}>
                            {
                                links.map((item, index) => <li className={styles["mobileLinks-item"]} key={index}>
                                        <div style={{padding : ".5em 1em"}} className={item.path === pathname ? styles["activeLink-mobile"] : ""}><Link href={item.path}>{item.title}</Link></div>
                                    </li>)
                                }
                            </ul> : <></>
                        }
                    </div>

                    <div className="d-flex align-items-center position-relative">
                        {/* <button className={styles["installBtnMobile"]}><IoDownloadOutline/></button> */}
                        <button className={styles["installBtn"]}><span className="txt-c-large me"><IoDownloadOutline/></span> <span className={styles["installText"]}>{t("installBtn")}</span></button>
                        <div className="txt-darkBlue txt-c-normal lh-base text-center" style={{ paddingBottom : ".4em" }}>
                            <span className="me-2"><Link href="/">{t("signin")}</Link></span>
                            /
                            <span className="ms-2"><Link href="/">{t("signup")}</Link></span>
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
                        props.showSearch == false ? <></> : <HeaderSearch question={props.question} />
                        }
                    </>
                }

            </header>
        </>
    )
}


export default Header;