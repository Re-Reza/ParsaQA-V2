import React from "react";

import { MdHowToVote } from "react-icons/md";
import { BsEyeFill, BsBookmark } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";

import styles from "../../../public/styles/categories.module.scss";


function QuestionItem(props) {

    const { topic, tags, user, vots, views, answers, answerTxt, time, readingTime } = props.item;

    return (
        <li className={styles["questionItem"]}>

            <div className="me-4 d-flex flex-column justify-content-center">
                <div className="mb-2 txt-gray3">
                    <span className="mb-3 me-3 txt-large2" ><MdHowToVote /></span>
                    <span >امتیاز {vots}</span>
                </div>
                <div className="mb-2">
                    <span className="mb-3 me-3 txt-large2"><BsEyeFill /></span>
                    <span className="txt-muted">بازدید {views}</span>
                </div>
                <div className="mb-2">
                    <span className="mb-3 me-3 txt-large2"><BiMessage /></span>
                    <span className="txt-muted">پاسخ {answers}</span>
                </div>
            </div>

            <div style={{ width: "87%" }} className="d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between txt-muted">
                    <p className="txt-c-normal txt-gray3 lh-base" style={{ maxWidth: "86%" }}>{topic}</p>
                    {
                        props.isAnswer ? <div>
                            زمان مطالعه :  {readingTime} دقیقه
                        </div> : <></>
                    }
                </div>
                {
                    props.isAnswer == true ? <p className="txt-gray3 mt-4 lh-lg">{answerTxt}</p> : <></>
                }
                <div className="d-flex justify-content-between mt-5">
                    <ul className={styles["tagsContainer"]}>
                        {
                            tags.map((item, index) => <li className={styles["tag"] + " text-center lh-sm"} key={index}>{item}</li>)
                        }
                    </ul>
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center ">
                            <img className="me-2" src="/imgs/user.png" alt="user" />
                            <span>{user}</span>
                        </div>
                        <span className="txt-muted text-center ms-4 fs-c-1 lh-sm">{time} دقیقه قبل</span>
                        <span role="button" className="txt-c-large txt-muted ms-1"><BsBookmark /></span>
                    </div>
                </div>
            </div>

        </li>
    )
}

export default QuestionItem;