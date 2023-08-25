import React from "react";
import Link from "next/link";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import styles from "../../../public/styles/headerFooter.module.scss";

function Footer(props) {

    const links = {
        col1: [
            { title: "درباره", path: "/" },
            { title: "تیم پارسا", path: "/" },
            { title: "شرایط و حریم خصوصی", path: "/" },
            { title: "آخرین پرسش ها", path: "/" },
            { title: "دسته بندی ها", path: "/" },
            { title: "پربازدید ها", path: "/" },
        ],
        col2: [
            { title: "سوالات قرآنی", path: "/" },
            { title: "سوالات احکام", path: "/" },
            { title: "سوالات عقیدتی", path: "/" },
            { title: "سوالات تاریخ اسلام", path: "/" },
            { title: "سوالات نماز", path: "/" },
            { title: "سوالات روزه", path: "/" },
        ],
    };

    return (
        <>
            <footer className={styles["footer"] + " txt-gray2 position-relative"} >
                <img src="/imgs/blueEffect.png" className="blueEffect" style={{ top : props.top}} />
                <div className={styles["footer-contentContainer"]}>

                    <div>
                        <h4 className="mb-4 txt-c-medium txt-large text-white">پارسا </h4>
                        <p className="lh-base">پارسا موتور جستجوی پرسش و پاسخ‌های حوزه علوم اسلامی به زبان‌های مختلف از منابع معتبر است؛ که هدف آن افزایش دانش و دسترسی ساخت یافته مخاطبین به پرسش و پاسخ‌های دینی؛ تسهیل فرآیند آشنایی مخاطبان با اصطلاحات فقهی موجود در استفتائات و رساله عملیه مراجع؛ ایجاد بستر مشترک برای رفع چالش‌های فنی مراکز پاسخگویی در ارائه محتوا به مخاطبان؛ کاهش هزینه‌های زمانی و مالی با جلوگیری از ایجاد پرسش‌های تکراری است.</p>
                    </div>

                    <div>
                        <h4 className="mb-4 txt-c-medium text-white">آدرس</h4>
                        <p className="lh-base mb-5">آزمايشگاه داده کاوی و پردازش تصوير، دانشکده مهندسي کامپيوتر، دانشگاه صنعتي شاهرود</p>
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
                        <h4 className="mb-4 txt-c-medium text-white">لینک های سریع</h4>
                        <div className="container">
                            <div className="row">
                                <ul className="col">
                                    {
                                        links.col1.map((item, index) => <li key={index} className="mb-2"> <Link href={item.path}>{item.title}</Link> </li>)
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
                                        links.col2.map((item, index) => <li key={index} className="mb-2"> <Link href={item.path}>{item.title}</Link> </li>)
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