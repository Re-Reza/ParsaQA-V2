"use client"
import React from "react";
import { useParams } from "next/navigation";
import { BsApple } from "react-icons/bs";
import styles from "../../../../public/styles/home.module.scss";
import { useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";

function Introduction() {
    
    React.useEffect(() => {
        AOS.init({
            once : true
        });
    }, []);

    const { locale } = useParams();
    const t = useTranslations("home");
    // use count up for this part
    const infoList = [
        { icon : "questionIcon.png ", title : t("questionsCount"), quanity : 486201 },
        { icon: "userStarIcon.png", title: t("resourcesCount"), quanity: 9 },
        { icon : "tagIcon.png", title : t("tagsCount"), quanity : 35206 },
        { icon: "brainIcon.png", title: t("crawlingCount"), quanity : 16 },
        { icon : "languageIcon.png", title : t("langCount"), quanity : 23 },
    ];

    return (
        <>
            <section className={styles["introduction-featureSection"]}>
                {
                    infoList.map((item, index) => <article data-aos="flip-left" data-aos-duration="1000" data-aos-delay="400" className="d-flex flex-column align-items-center" key={index}>
                        <div className={styles["introduction-featureSection-icon"]}>
                            <img src={"/imgs/" + item.icon} alt={item.icon} />
                        </div>
                        <h4 className="txt-c-large txt-gray3">{item.title}</h4>
                        <div className="mt-4 text-white txt-c-large txt-large2 fw-500">{item.quanity}</div>
                    </article>)
                }
            </section>

            <section className={styles["introduction-appIntroSection"]}>

                <div className={styles["introduction-appIntroSection-content"]+" text-white"}>

                    <p className="txt-c-normal">
                        {t("introTitle")} <span className="txt-c-large txt-large">{t("introTitleLarg")}</span> {t("join")}
                    </p>

                    <div className="mb-4 mt-4 d-flex align-items-center justify-content-end">
                        <p className="txt-c-large me-4 txt-large">{t("introCount")}</p>
                        <div><img src="/imgs/parsaUsers.png" className="w-100" alt="parsaUsers" /></div>
                    </div>
                
                    <div className="d-flex align-items-center flex-column flex-sm-row">
                        <div className="me-4">{t("introDownload")}</div>
                        <div className="d-flex mt-3 mt-sm-0">
                            <button data-aos-delay="400" data-aos-duration="800" data-aos="fade-down" className={"d-flex me-4 " + styles["downloadBtn"]}>
                                <span className="d-flex flex-column me-2">
                                    <span className="mb-2">GET IT ON </span>
                                    <span className="txt-c-large">Google Play</span>
                                </span>
                                <img style={{ width: "37px" }} src="/imgs/playStore.png" alt="playStore" />
                            </button>
                            <button data-aos-delay="400" data-aos-duration="800" data-aos="fade-down" className={"d-flex " + styles["downloadBtn"]}>
                                <span className="d-flex flex-column me-2">
                                    <span className="mb-2">Download on the </span>
                                    <span className="txt-c-large">App Store</span>
                                </span>
                                <span className="txt-c-large" style={{ fontSize: "2.2em" }}><BsApple /></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles["appIntroImg-container"] + " position-absolute"} style={{ left: locale == "en" ? "63%" : "3%", top: "-9%" }}>
                    <img className={styles["appIntroImg"]} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200" src="/imgs/phoneIntro.png" alt="phoneIntro" />
                </div>
            </section>
            <div className={styles["appIntroImg-alternate-container"]+"  justify-content-center ps-sm-5 pe-sm-5 ps-0 pe-0 position-relative"}>
                <img data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200"className="w-100" src="/imgs/phoneIntro.png" alt="phoneIntro" />
            </div>
        </>
    )
}

export default Introduction;