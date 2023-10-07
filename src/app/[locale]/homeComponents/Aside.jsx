"use client"
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "../../../../public/styles/home.module.scss";
import { getHadis } from "../../../dataService/homeData";
function Aside (props) {

    const [ state, setState ] = useState({
        hadis : {
            autor : "امام علی (علیه السلام)",
            text : "يا أباذَرٍّ، اِتَّقِ اللّه َ و لا تُرِ الناسَ أنَّكَ تَخشَى اللّه َ فَيُكرِمُوكَ و قَلبُكَ فاجِرٌ . اى ابوذر! از خدا بترس و در حالى كه دلى تبهكار دارى، براى جلب احترام مردم، نزد آنان خود را خدا ترس وانمود مكن ."
        }
    });

    const t = useTranslations("home");

    // const categoryList = [
    //     { title : "قرآن کریم", img : "/imgs/quran.png" },
    //     { title : "احکام", img : "/imgs/bend.png" },
    //     { title : "تاریخ و سیره", img : "/imgs/history.png" },
    //     { title : "اخلاق و تربیت اسلامی", img : "/imgs/hadis.png" },
    //     { title : "حدیث", img : "/imgs/political.png" },
    //     { title : "عقاید وکلام", img : "/imgs/speech.png" },
    //     { title : "اجتماعی سیاسی", img : "/imgs/political.png" },
    //     { title : "گوناگون", img : "/imgs/various.png" }
    // ]

    // useEffect(() => {
    //     getHadis().then( response => {
    //         console.log(response);
    //         setState({
    //             ...state,
    //             hadis : {
    //                 autor : "",
    //                 text : ""
    //             }
    //         })
    //     }).catch(err => { 
    //         console.log(err);
    //     });

    // }, []);

    const imgs = {
        "قرآن کریم" : "/imgs/quran.png" ,
        "احکام" : "/imgs/bend.png" ,
        "تاریخ و سیره" : "/imgs/history.png" ,
        "اخلاق و تربیت اسلامی" : "/imgs/hadis.png",
        "حدیث" : "/imgs/political.png",
        "عقاید وکلام" : "/imgs/speech.png" ,
        "اجتماعی سیاسی": "/imgs/political.png",
        "گوناگون" : "/imgs/various.png" 
    }

    return (
        <>
            <div className="mb-5">   
                <div className="mb-4 txt-gray3 txt-c-large" style={{fontSize: "1.4em"}}>{t("categories")}</div>
                <ul className={styles["aside-categories"]}>
                    {
                        props.data.map((item, index) => <li role="button" className={styles["aside-categoriesItem"]} key={item.id}>
                            <img className="mb-3" src={imgs[item["title"] ]} alt={item.img} />
                            <div className="lh-base txt-gray3">{item.title}</div>
                        </li>)
                    }
                </ul>
            </div>

            <div>
                <div className="txt-gray3 mb-4 txt-c-large" style={{fontSize: "1.4em"}}>{t("dailyHadis")}</div>
                <div className={styles["hadisContainer"]}>
                    <h5 className="text-center mb-3 txt-c-large">{state.hadis.autor}</h5>
                    <p className="lh-lg">
                    {
                        state.hadis.text
                    }
                    </p>
                </div>
                <div className={styles["adsContainer"]}>
                    {t("adsContainer")}
                </div>
            </div>
        </>
    )
}

export default Aside;