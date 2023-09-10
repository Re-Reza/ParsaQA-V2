import React from "react";

import { GiStarShuriken } from "react-icons/gi";

import styles from "../../../../../../public/styles/dashboard.module.scss";

function Rates() {

    const userLevels = [
        { title: "مبتدی", level: 0 },
        { title: "عادی", level: 1 },
        { title: "برتر", level: 2 },
        { title: "ممتاز", level: 3 },
        { title: "پیشرفته", level: 4 },
        { title: "اعلی درجه", level: 5 }
    ];

    const rates = [
        { title: "تکمیل پروفایل", rate: 100 },
        { title: "دنبال کردن 10 کاربر", rate: 100 },
        { title: "پاسخ به هر سوال", rate: 200 },
        { title: "پرسیدن هر سوال", rate: 100 },
        { title: "بازنشر هر سوال/جواب", rate: 100 }
    ];

    function generateStars(level) {
        const stars = []
        for (let i = level / 100; i > 0; i--)
            stars.push(<span className="txt-darkBlue txt-c-large me-2" style={{ fontSize: "2.2em" }}><GiStarShuriken /></span>)

        return stars
    }

    return (
        <div>

            <div>
                <div className="txt-c-large txt-grey3 mb-4">سطح کاربری شما</div>
                <ul className="d-flex  mb-5">
                    {
                        userLevels.map((item, index) => <li key={index} className="tet-grey3 d-flex align-items-center flex-column txt-center me-4">
                            <div className={styles["levelItem"] + (item.level == 0 ? " bg-darkBlue" : "")}></div>
                            <div className="mt-3">{item.title}</div>
                        </li>)
                    }
                </ul>
            </div>

            <div className="mt-4">
                <div className="txt-c-large txt-grey3 mb-4">نحوه امتیاز گیری</div>
                <ul className={styles["rateList-container"]}>
                    {
                        rates.map((item, index) => <li className={styles["rate-item"]} key={index}>
                            <div className="mb-3 lh-base">{item.title}</div>
                            <div>{generateStars(item.rate)}</div>
                            <div className="mt-3 lh-base">{item.rate} حسنه</div>
                        </li>)
                    }
                </ul>
            </div>

            <div className="d-flex justify-content-end">
                <button className={styles["follow"]} style={{ width: "max-content", paddingRight: "3em", paddingLeft: "3em", marginTop: "7em" }}>اطلاعات بیشتر</button>
            </div>

        </div>
    )
}

export default Rates;