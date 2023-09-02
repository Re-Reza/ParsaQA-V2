"use client"
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../../public/styles/home.module.scss";

function Aside (props) {

    const { t } = useTranslation("home");

    const categoryList = [
        { title : "قرآن", img : "/imgs/quran.png" },
        { title : "احکام", img : "/imgs/bend.png" },
        { title : "سیره و تاریخ", img : "/imgs/history.png" },
        { title : "اخلاق و تربیت اسلامی", img : "/imgs/hadis.png" },
        { title : "حدیث", img : "/imgs/political.png" },
        { title : "عقاید و کلام", img : "/imgs/speech.png" },
        { title : "اجتماعی سیاسی", img : "/imgs/political.png" },
        { title : "گوناگون", img : "/imgs/various.png" }
    ]

    return (
        <>
            <div className="mb-5">   
                <div className="mb-4 txt-gray3 txt-c-large" style={{fontSize: "1.4em"}}>{t("categories")}</div>
                <ul className={styles["aside-categories"]}>
                    {
                        categoryList.map((item, index) => <li role="button" className={styles["aside-categoriesItem"]} key={item.id}>
                            <img className="mb-3" src={item.img} alt={item.img} />
                            <div className="lh-base txt-gray3">{item.title}</div>
                        </li>)
                    }
                </ul>
            </div>

            <div>
                <div className="txt-gray3 mb-4 txt-c-large" style={{fontSize: "1.4em"}}>حدیث روز</div>
                <div className={styles["hadisContainer"]}>
                    <h5 className="text-center mb-3 txt-c-large">امام علی (علیه السلام)</h5>
                    <p className="lh-lg">
                    يا أباذَرٍّ، اِتَّقِ اللّه َ و لا تُرِ الناسَ أنَّكَ تَخشَى اللّه َ فَيُكرِمُوكَ و قَلبُكَ فاجِرٌ . 
اى ابوذر! از خدا بترس و در حالى كه دلى تبهكار دارى، براى جلب احترام مردم، نزد آنان خود را خدا ترس وانمود مكن .
                    </p>
                </div>
                <div className={styles["adsContainer"]}>
                    محل تبلیغات شما
                </div>
            </div>
        </>
    )
}

export default Aside;