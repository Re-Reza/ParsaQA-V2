"use client"
import React from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation"
import { MdHowToVote } from "react-icons/md";
import { BsEyeFill, BsBookmark } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { useTranslations } from "next-intl";
import moment from "jalali-moment";
import styles from "../../../../public/styles/categories.module.scss";

// this component is made for key name of api data
function QuestionItem(props) {
    
    const { id, content, created_at, language, tags, title, answers, sum_votes, user, question, answer, source, sum_visits } = props.item;
    const { locale } = useParams();
    function generateLink(link){
        const title = link.replaceAll(" ", "-");
        return `/tags/${title}`;
    }

    const t = useTranslations("question");
    const { push } = useRouter();

    // function navToPage(id){
    //     push(`/questions/${id}`);
    // }

    return ( 
        <li className={styles["questionItem"]} >
            <div className=" ms-4 d-flex flex-column justify-content-center">
                <div className="mb-2 txt-gray3 w-mx-content">
                    <span className="mb-3 me-3 txt-large2" ><MdHowToVote /></span>
                    <span >{t("rate")} { sum_votes || 0}</span>
                </div>
                <div className="mb-2 w-mx-content">
                    <span className="mb-3 me-3 txt-large2"><BsEyeFill /></span>
                    <span className="txt-muted">{t("view")}  { sum_visits || 0} </span>
                </div>
                <div className="mb-2 3 w-mx-content">
                    <span className="mb-3 me-3 txt-large2"><BiMessage /></span>
                    <span className="txt-muted">{t("answer")} {props.tag ? answer.length : ( sum_visits ) }</span>
                </div>
            </div>

            <div style={{ width: "87%" }} className="d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between txt-muted hover-lightBlue">
                    <Link href={`/questions/${id}?isOld=${props.isOld == true ? 1 : 0}`} className="txt-c-normal txt-gray3 lh-base" style={{ maxWidth: "86%" }}>{props.tag || props.isSearch ? question : title}</Link>
                </div>
                {/* {
                    props.isAnswer == true ? <p className="txt-gray3 mt-4 lh-lg">{answerTxt}</p> : <></>
                } */}
                <div className="d-flex flex-column flex-md-row  justify-content-between mt-5">
                    <ul className={styles["tagsContainer"]}>
                        {
                            tags ? tags.map((item, index) => <li className={styles["tag"] + " text-center lh-sm"} key={index}>
                                <Link href={generateLink(item)}>{item}</Link>
                            </li>) : <></>
                        }
                    </ul>
                    <div className="d-flex flex-wrap flex-column align-self-end mt-3 mt-md-0 align-items-end">
                        <div className="d-flex align-items-center mb-3">
                            <span className="txt-muted text-center ms-4 fs-c-1 lh-sm">{moment(created_at).locale(locale).format("YYYY/MM/DD")}</span>
                            <span role="button" className="txt-c-large txt-muted ms-1"><BsBookmark /></span>
                        </div>
                        <div className="d-flex align-items-center hover-lightBlue">
                            <Link href={"https://"+(props.isSearch || props.tag ? source.url : source.link )}>
                                <span className="lh-base">{ props.isSearch || props.tag ? (  locale == "en" ? source.english_name : source.persian_name ) : ( locale == "en" ? source.translates.en : source.translates.fa ) }</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default QuestionItem;