"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { GoPencil } from "react-icons/go";
import { BsShare, BsBookmark } from "react-icons/bs";
import { BiUpArrow, BiDownArrow,  } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import moment from "jalali-moment";
import { voteQuestion, voteAnswer } from "../../../dataService/questionData";
import styles from "../../../../public/styles/question.module.scss";
import { ToastContainer, toast, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function QuestionContent(props) {



    const { id, title, content, tags, created_at, answers, comments, sum_visits, sum_votes, user, source : { translates, link } } = props.data; 
    const t = useTranslations("question");
    const { locale } = useParams();
    const date = moment(created_at).local(locale).format("YYYY/MM/DD");
    
    const [ state, setState ] = useState({
        vote : sum_votes,
        modified : {
            id : null,
            weight : null,
        } 
    });

    function callVoteQuestion(weight){
        voteQuestion(id, weight).then( response => {
            // console.log(response)
            toast.success("با موفقیت انجام شد");
            setState({
                ...state,
                vote : state.vote + (weight)
            })
        }).catch( err => {
            // console.log(err)
            toast.error("خطایی رخ داده است")
        });
    }

    function callVoteAnswer(answerId, weight){
        voteAnswer(id, answerId, weight).then( response => {
            // console.log(response)
            toast.success("با موفقیت انجام شد");
            setState({
                ...state,
                modified : {
                    id : answerId,
                    weight
                }
            })
        }).catch( err => {
            // console.log(err)
            toast.error("خطایی رخ داده است")
        });
    }
    function generateLink(link){
        const title = link.replaceAll(" ", "-");
        return `/tags/${title}`;
    }
    return (
        <>
         <ToastContainer
            position="top-right"
            autoClose={4000}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnHover
            />
            <div>

                <div className={styles["questionContent-question"]}>

                    <div className="me-1 me-sm-2 me-md-3">
                        <div className="d-flex flex-column align-items-center mb-4">
                            <button className={styles["voteCircle"]+" "+styles["hover-green"] + " txt-c-medium txt-large2"} onClick={()=> callVoteQuestion(1)} ><BiUpArrow/></button>
                            <div className="d-flex mt-3 mb-3 txt-c-normal"> <span>{t("rate")}</span>&nbsp;&nbsp;<span>{state.vote}</span> </div>
                            <button className={styles["voteCircle"]+" "+styles["hover-red"] + " txt-c-medium txt-large2"}  onClick={()=> callVoteQuestion(-1)} ><BiDownArrow/></button>
                        </div>

                        <div className="d-flex txt-muted txt-c-normal align-items-center">
                            <span className="me-1 txt-large"><AiOutlineEye/></span>
                            <span className="oneLineText">{t("view")} {sum_visits} </span>
                        </div>

                        <div className={styles["questionSource"]}>
                            <Link className="hover-lightBlue" target="_blank" href={"https://"+link}>{locale == "en" ? translates.en : translates.fa }</Link>
                        </div>
                    </div>

                    <div>
                        <div className="mb-5">
                            <div className="d-flex mb-3">
                                <p className="txt-gray3 txt-c-normal fw-500 lh-lg">{title}</p>
                                {/* <div>
                                    <span>{t("readTime")}</span>
                                    <span></span>
                                </div> */}
                            </div>
                            <p className="txt-gray3 fw-450 lh-base">{content}</p>
                        </div>
                        
                        <div className={styles["optionContainer"]+" d-flex justify-content-between align-items-end"}>
                            <ul className={styles["tagsContainer"]}>
                                {
                                    tags.map((item, index) => <li className={styles["tag"]} key={index}>
                                        <Link href={generateLink(item)}>{item}</Link>
                                    </li>)
                                }
                            </ul>
                            <div className="d-flex flex-wrap justify-content-end flex-sm-nowrap txt-muted fw-500">
                                <span >{user ? user : ""}</span>
                                <span className="me-3"><GoPencil/></span>
                                <span className="me-3"><BsShare/></span>
                                <span className="me-3"><BsBookmark/></span>
                                <span className="me-3 mt-1">{date}</span>
                            </div>
                        </div>
                    </div>

                </div>

                <h3 className="mb-3 txt-gray3 txt-large2 txt-c-large mt-5">
                    {t("answers")}&nbsp;
                    ({answers ? answers.data.length : 0})
                </h3>
                
                {
                    answers?
                    <div className={styles["questionContent-answer"]+" mt-4"}>
                       
                        <ul>
                        {
                            answers.data.map((item, index) => <li className={styles["answerItem"]} key={index}>
                                <div className="me-1 me-sm-2 me-md-3">
                                    <div className="d-flex flex-column align-items-center mb-4">
                                        <button className={styles["voteCircle"] +" "+styles["hover-green"]+" txt-c-medium txt-large2"} onClick={()=>callVoteAnswer(item.id, 1)}><BiUpArrow/></button>
                                        <div className="d-flex mt-3 mb-3 txt-c-normal"> <span>{t("rate")}</span>&nbsp;&nbsp;<span>{state.modified.id == item.id ? item.sum_votes + state.modified.weight : item.sum_votes }</span> </div>
                                        <button className={styles["voteCircle"]+" "+styles["hover-red"]+ " txt-c-medium txt-large2"} onClick={()=>callVoteAnswer(item.id, -1)}><BiDownArrow/></button>
                                    </div>

                                    <div className="d-flex txt-muted txt-c-normal align-items-center ">
                                        <span className="me-1 txt-large"><AiOutlineEye/></span>
                                        <span className="oneLineText">{item.sum_visits || 0 } {t("view")}</span>
                                    </div>

                                    <div className={styles["questionSource"]}>
                                        <Link className="hover-lightBlue" target="_blank" href={"https://"+item.source.link}>{locale == "en" ? item.source.translates.en : item.source.translates.fa }</Link>
                                    </div>
                                </div>

                                <div className="w-100">

                                    <div className="d-flex flex-column justify-content-between align-items-end">
                                        <p className="txt-gray3 fw-500 lh-lg">{item.content}</p>
                                        <div className="mt-5">
                                            <span className="txt-muted">{moment(item.created_at).local(locale).format("YYYY/MM/DD")}</span>
                                        </div>
                                    </div>
                                    
                                    {/* <div>
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
                                    </div> */}

                                </div>

                            </li>)
                        }
                        </ul>
                </div> :<></>
                }
            </div>
        </>
    )
}

export default QuestionContent;