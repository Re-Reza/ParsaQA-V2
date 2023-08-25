'use client';

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import HeaderCategory from "./HeaderCategory";
import { IoDownloadOutline } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import { Spin as Hamburger } from 'hamburger-react';
import Form from 'react-bootstrap/Form';
import styles from "../../../public/styles/headerFooter.module.scss";

function Header(props) {

    const pathname = usePathname();

    const links = [
        { path: "/", title: "خانه" },
        { path: "/b", title: "محصولات" },
        { path: "/c", title: "درباره ما" },
        { path: "/d", title: "تماس با ما" }
    ];

    const [ state, setState ] = useState({
        showlinkMenu : false,
    });

    function showHamMenu(){
        setState({
            showlinkMenu : !state.showlinkMenu 
        });
    }

    // {
    //     state.showlinkMenu ? 
    //     <ul className={styles["mobileLinks"]}>
    //     {
    //         links.map((item, index) => <li className={styles["mobileLinks-item"]} key={index}>
    //             <Link href={item.path}>{item.title}</Link>
    //             </li>)
    //         }
    //     </ul> : <></>
    // }
   

    return (
        <>
            <img src="/imgs/purpleEffect.png" className="pupleEffect" />
            <header className={styles["header"]}>
                <nav className="d-flex justify-content-between align-item-center">
                    
                    <div className="d-flex align-items-center">
                        <button onClick={showHamMenu} className={styles["hamburgerBtn"]+" me-4"}><Hamburger/></button>
                        <div className="me-5"><img className={styles["logoImg"]} src="/imgs/logoParsa.png" alt="logo-parsa" /></div>
                        <ul className={styles["navLinks"]+" d-flex me-5"}>
                            {
                                links.map((item, index) => <li className={"me-3 fw-500 " + (pathname === item.path ? styles["active-link"] : "")} key={index}><Link href={item.path}>{item.title}</Link></li>)
                            }
                            <li className="position-relative">
                                <Link className={"me-3 fw-500 " + (pathname === "/categories" ? styles["active-link"] : "")} href="/categories">دسته بندی ها</Link>
                                {/* <HeaderCategory /> */}
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        {/* <button className={styles["installBtnMobile"]}><IoDownloadOutline/></button> */}
                        <button className={styles["installBtn"]}><span className="txt-c-large me-2"><IoDownloadOutline/></span> نصب اپلیکیشن </button>
                        <div className="txt-darkBlue txt-c-normal lh-base text-center" style={{ paddingBottom : ".4em" }}>
                            <span className="me-2"><Link href="/">ورود</Link></span>
                            /
                            <span className="ms-2"><Link href="/">عضویت</Link></span>
                        </div>
                        <div className="ms-4">
                            <Form.Select>
                                <option>English</option>
                                <option>فارسی</option>
                            </Form.Select>
                        </div>
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
                        <h2 className={"text-center mb-4 mt-4 " + styles["header-title"]}>
                            <span className="txt-darkBlue"> پارسا </span>
                            شبکه اجتماعی پرسش و پاسخ دینی
                            {/* به شکل تایبی بیاد */}
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