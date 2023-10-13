"use client"
import React from "react";
import Header from "../homeComponents/Header";
import Footer from "../homeComponents/Footer";
// import { FaLinkedin }  from "react-icons/fa";
import { useTranslations } from "next-intl";
import { HiOutlineMail } from "react-icons/hi";
import styles from "../../../../public/styles/aboutUs.module.scss";

function AboutUs(){

    const t = useTranslations("aboutUs");
    // const teamList = [
    //   { name : "پروفسور حمید حسن پور", title : "استادتمام دانشگاه صنعتی شاهرود", linkedin : ""},
    //   { name : "محمدحسین الهی منش", title : "دکتری دانشگاه صنعتی شاهرود", linkedin : ""},
    //   { name : "محمدرضا حسن پور", title : "دکتری دانشگاه صنعتی شاهرود", linkedin : ""},
    //   { name : "آرش غفوری", title : "دکتری دانشگاه علم و صنعت", linkedin : ""},
    //   { name : "حمیده عرفانی", title : "دکتری دانشگاه سمنان", linkedin : ""},
    //   { name : "میثم گنجعلی دارانی", title : "کارشناسی ارشد دانشگاه شهاب دانش", linkedin : ""},
    //   { name : "مرسده ایرانی", title : "کارشناس ارشد دانشگاه علم و صنعت", linkedin : ""},
    //   { name : "محمد آقاجانی", title : "کارشناس ارشد دانشگاه صنعتی شریف", linkedin : ""},
    //   { name : "فاطمه وطنی", title : "کارشناس ارشد دانشگاه سمنان", linkedin : ""},
    //   { name : "ایمان براتی", title : "کارشناس ارشد دانشگاه علم و صنعت", linkedin : ""},
    //   { name : "آیسان چهره", title : "کارشناس ارشد دانشگاه زنجان", linkedin : ""},
    //   { name : "اعظم نعمتی", title : "کارشناسی ارشد دانشگاه هنر", linkedin : ""},
    //   { name : "محمدهادی الهی منش", title : "سطح سوم حوزه علمیه", linkedin : ""},
    //   { name : "علیرضا بانشی", title : "کارشناسی ارشد دانشگاه تهران", linkedin : ""},
    //   { name : "محمد پوربخت", title : "کارشناسی دانشگاه خوارزمی", linkedin : ""},
    //   { name : "مبینا اسماعیلی", title : "کارشناس دانشگاه الزهرا", linkedin : ""},
    //   { name : "بهار بهزادی پور", title : "کارشناسی دانشگاه خوارزمی", linkedin : ""},
    //   { name : "یاسمن تیموری", title : "کارشناسی دانشگاه صنعتی شاهرود", linkedin : ""}
    // ];

    return(
      <>
        
        <div className="mainContentContainer">
            <Header isAboutUs={true} />

            <div className="position-relative fw-500 txt-gray zindex-dropdown zindex-dropdown">
              <h1 className={styles["title"]+" text-center lh-base txt-gray3"}>
                {t("headings")}&nbsp;
                <span  className="txt-darkBlue">{t("parsa")}</span>&nbsp;
              </h1>

              <h3  style={{fontSize : "1.5rem"}} className="txt-c-large mb-4 mt-4 txt-gray3">
                {t("pageTitle")}
              </h3>
              <p className="lh-lg">
                {t("description")}
              </p>
              <p className="mt-3 mb-3">{t("description2")}</p>
              <ul>
                <li className={styles['featurelistItem']+" mb-3"}>{t("featureItem1")}</li>
                <li className={styles['featurelistItem']+" mb-3"}>{t("featureItem2")}</li>
                <li className={styles['featurelistItem']+" mb-3"}>{t("featureItem3")}</li>
                <li className={styles['featurelistItem']+" mb-3"}>{t("featureItem4")}</li>
                <li className={styles['featurelistItem']+" mb-3"}>{t("featureItem5")}</li>
                <li className={styles['featurelistItem']+" mb-3"}>{t("featureItem6")}</li>
                <li className={styles['featurelistItem']+" mb-3"}>{t("featureItem7")}</li>
                <li className={styles['featurelistItem']+" mb-3"}>{t("featureItem8")}</li>
              </ul>
              
              <div className={styles["stayInTouchBox"]}>
                <div className="text-white mb-3 txt-c-large txt-large"><HiOutlineMail/></div>
                <p className="txt-gray3 txt-c-large mb-3 txt-c-large">{t("contactUs")}</p>
                <p className="text-white txt-c-large">info@parsaqa.com</p>
              </div>

            </div>

            {/* <ul className={styles["teamListContain er"]}>
              {
                teamList.map((item, index) => <li className="d-flex flex-column align-items-center" key={index}>
                  <img src="/imgs/team-member.png"/>
                  <div className="txt-grey3 mt-3 fw-500" >{item.name}</div>
                  <div className="txt-muted mt-3">{item.title}</div>
                  <div className="txt-c-large txt-large txt-darkBlue mt-2"><FaLinkedin/></div>
                </li>)
              }
            </ul> */}

        </div>
        <Footer />
      </>
    )
}

export default AboutUs;