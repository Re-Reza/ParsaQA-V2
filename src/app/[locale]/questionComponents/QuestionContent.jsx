"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { GoPencil } from "react-icons/go";
import { BsShare, BsBookmark } from "react-icons/bs";
import { BiUpvote, BiDownvote,  } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import moment from "jalali-moment";
import styles from "../../../../public/styles/question.module.scss";

function QuestionContent(props) {

    const { id, title, content, tags, created_at, answers, comments, sum_votes, user } = props.data; 
    const t = useTranslations("question");
 
    const date = moment(created_at).local(props.locale).format("YYYY/MM/DD");

    const tt = ["اخلاق و تربیت اسلامی", "روانشناسی", "تربیت", "خودبرتربینی"]
    return (
        <div>

            <div className={styles["questionContent-question"]}>

                <div className="me-3">
                    <div className="d-flex flex-column align-items-center mb-4">
                        <button><BiUpvote/></button>
                        <div className="d-flex mt-3 mb-3"> <span>{t("rate")}</span> <span>{sum_votes}</span> </div>
                        <button><BiDownvote/></button>
                    </div>

                    <div className="d-flex">
                        <span className="me-1"><AiOutlineEye/></span>
                        <span className="oneLineText">2 بازدید</span>
                    </div>
                </div>

                <div>
                    <div className="mb-5">
                        <div className="d-flex mb-3">
                            <p className="txt-gray3 txt-c-normal fw-500 lh-base">{title}</p>
                            {/* <div>
                                <span>{t("readTime")}</span>
                                <span></span>
                            </div> */}
                        </div>
                        <p className="txt-gray3 fw-450 lh-base">{content}</p>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-end ">
                        <ul className={styles["tagsContainer"]}>
                            {
                                tt.map((item, index) => <li className={styles["tag"]} key={index}>{item}</li>)
                            }
                        </ul>
                        <div className="d-flex txt-muted fw-500">
                            <span >{user ? user : ""}</span>
                            <span className="me-3"><GoPencil/></span>
                            <span className="me-3"><BsShare/></span>
                            <span className="me-3"><BsBookmark/></span>
                            <span className="me-3">{date}</span>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* <div className={styles["questionContent-answer"]}>
                <h3 className="mb-2">
                    {t("answers")}
                    ({answers.data.length})
                </h3>
                <ul>
                {
                    answers.data.map((item, index) => <li key={index}>
                        <div>

                        </div>

                        <div>

                            <div>

                            </div>
                            
                            <div>
                                <h6>
                                    {t("comments")}
                                    ({item.comments.data.length})
                                </h6>
                                <ul>
                                    {
                                        item.comments.data.map((item, index) => <li key={index}>
                                            <div></div>
                                            <div></div>
                                        </li>)
                                    }
                                </ul>
                            </div>

                        </div>

                    </li>)
                }
                </ul>
            </div> */}

        </div>
    )
}

export default QuestionContent;