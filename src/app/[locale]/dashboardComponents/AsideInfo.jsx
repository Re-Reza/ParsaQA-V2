"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../../../public/styles/dashboard.module.scss";

function AsideInfo() {

    const data = {
        email: "Azmnematipour@gmail.com",
        location: "اصفهان، ایران",
        lastSeen: "امروز",
        followers: 0,
        friends: 0,
        rates: 0,
        userType: 0,
        votes: 25622,
        answers: 860,
        questions: 15
    }

    const path = usePathname();

    const userTypes = [
        { item: "مبتدی", id: 0 },
        { item: "کاربر عادی", id: 1 },
        { item: "متخصص", id: 2 }
    ]

    const tags = [
        "نماز", "حجاب", "قرآن", "جوان"
    ]


    return (
        <aside>

            <div className={styles["infoBox"]}>
                <div className="d-flex flex-column align-items-center">
                    <div className={styles["email"]}>{data.email}</div>
                    <div className="mt-3 txt-gray3 f-w500">{data.location} <span className="txt-gray txt-c-large"><HiOutlineLocationMarker /> </span></div>
                    <div className="mt-3 txt-gray  f-w500">آخرین فعالیت : {data.lastSeen}</div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <div className={"d-flex flex-column  text-center " + styles["followerData-item"]}>
                        <span className="txt-grey3 txt-c-large">{data.followers}</span>
                        <span className="mt-2 txt-grey4">دنبال کننده ها</span>
                    </div>
                    <div className={"d-flex flex-column  text-center " + styles["followerData-item"]}>
                        <span className="txt-grey3 txt-c-large">{data.friends}</span>
                        <span className="mt-2 txt-grey4">دوستان</span>
                    </div>
                    <div className="d-flex flex-column text-center">
                        <span className="txt-grey3 txt-c-large">{data.rates}</span>
                        <span className="mt-2 txt-grey4">امتیازات</span>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col"><button className={styles["sendMessage"]}>ارسال پیام</button></div>
                    <div className="col"><button className={styles["follow"]} >دنبال کردن</button></div>
                </div>
            </div>

            <div className={styles["infoBox"]}>
                <div className="txt-grey3 txt-c-large text-center mb-4">اطلاعات کاربری</div>
                <div className="row">
                    <div className="col"><div className={data.userType == 0 ? styles["biggener"] + " " + styles["activeUserType"] : styles["biggener"]}>مبتدی</div></div>
                    <div className="col"><div className={data.userType == 1 ? styles["normalUser"] + " " + styles["activeUserType"] : styles["normalUser"]}>کاربر عادی</div></div>
                    <div className="col"><div className={data.userType == 2 ? styles["expertUser"] + " " + styles["activeUserType"] : styles["expertUser"]}>متخصص</div></div>
                </div>
                <div className="d-flex mt-4 justify-content-center text-center">
                    <div className={"d-flex flex-column " + styles["followerData-item"]}>
                        <span className="txt-grey3 txt-c-large">{data.votes}</span>
                        <span className="mt-2 txt-grey4 ">رای ها</span>
                    </div>
                    <div className={"d-flex flex-column " + styles["followerData-item"]}>
                        <span className="txt-grey3 txt-c-large">{data.answers}</span>
                        <span className="mt-2 txt-grey4 ">پاسخ ها</span>
                    </div>
                    <div className="d-flex flex-column">
                        <span className="txt-grey3 txt-c-large">{data.questions}</span>
                        <span className="mt-2 txt-grey4 ">سوالات</span>
                    </div>
                </div>
                {
                    path == "/dashboard" ?
                        <ul className="d-flex justify-content-center mt-4">
                            {
                                tags.map((item, index) => <li className={styles["tag"]} key={index}>
                                    <span className="me-2" role="button"><AiOutlineClose /></span>
                                    <span>{item}</span>
                                </li>)
                            }
                        </ul> :
                        <></>
                }
            </div>

            <div className={styles["infoBox-dailyMessage"]}>
                <div className="txt-gray3 text-center txt-grey3 txt-c-large">حدیث روز</div>
                <div className="text-white text-end mt-3">امام علی (ع)</div>
                <img className="position-absolute" style={{ top: "17%", right: "10%" }} src="/imgs/dailyStar.png" alt="star" />
                <img className="position-absolute" style={{ top: "25%", width: "28px", left: "36%" }} src="/imgs/dailyStar.png" alt="star" />
                <p className="text-white lh-base mt-5 fs-c-1">يا أباذَرٍّ، اِتَّقِ اللّه َ و لا تُرِ الناسَ أنَّكَ تَخشَى اللّه َ فَيُكرِمُوكَ و قَلبُكَ فاجِرٌ .
                    اى ابوذر! از خدا بترس و در حالى كه دلى تبهكار دارى، براى جلب احترام مردم، نزد آنان خود را خدا ترس وانمود مكن .
                </p>
                <img src="/imgs/dailyMessageLayer.png" className="position-absolute w-100" style={{ top: "47%", right: "0" }} alt="layer" />
                <img src="/imgs/dailyStar.png" className="position-absolute" style={{ bottom: "8%", left: "7%" }} alt="star" />
            </div>

        </aside>
    )
}

export default AsideInfo;