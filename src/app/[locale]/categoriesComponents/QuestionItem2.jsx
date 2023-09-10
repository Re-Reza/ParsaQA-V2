import React from "react";
import Link from "next/link";
import { MdHowToVote } from "react-icons/md";
import { BsEyeFill, BsBookmark } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import moment from "jalali-moment";
import styles from "../../../../public/styles/categories.module.scss";


// this component is made for key name of api data
function QuestionItem(props) {
    console.log(props)
    const { id, content, created_at, language, tags, title, answers, sum_votes, user, question, answer } = props.item;
    console.log(answer)
    function generateLink(link){
        const title = link.replaceAll(" ", "-");
        return `/tags/${title}`;
    }

    return (
        <li className={styles["questionItem"]}>
            <div className="me-4 d-flex flex-column justify-content-center">
                <div className="mb-2 txt-gray3 w-mx-content">
                    <span className="mb-3 me-3 txt-large2" ><MdHowToVote /></span>
                    <span >امتیاز { sum_votes || 0}</span>
                </div>
                <div className="mb-2 3 w-mx-content">
                    <span className="mb-3 me-3 txt-large2"><BsEyeFill /></span>
                    <span className="txt-muted">بازدید نامشخص</span>
                </div>
                <div className="mb-2 3 w-mx-content">
                    <span className="mb-3 me-3 txt-large2"><BiMessage /></span>
                    <span className="txt-muted">پاسخ {props.tag ? answer.length : answers.data.length}</span>
                </div>
            </div>

            <div style={{ width: "87%" }} className="d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between txt-muted">
                    <p className="txt-c-normal txt-gray3 lh-base" style={{ maxWidth: "86%" }}>{props.tag ? question : title}</p>
                    {/* {
                        props.isAnswer ? <div>
                            زمان مطالعه :  {readingTime} دقیقه
                        </div> : <></>
                    } */}
                </div>
                {
                    props.isAnswer == true ? <p className="txt-gray3 mt-4 lh-lg">{answerTxt}</p> : <></>
                }
                <div className="d-flex flex-column flex-md-row  justify-content-between mt-5">
                    <ul className={styles["tagsContainer"]}>
                        {
                            tags.map((item, index) => <li className={styles["tag"] + " text-center lh-sm"} key={index}>
                                <Link href={generateLink(item)}>{item}</Link>
                            </li>)
                        }
                    </ul>
                    <div className="d-flex flex-wrap align-self-end mt-3 mt-md-0 align-items-center">
                        <div className="d-flex align-items-center">
                            {/* <img className="me-2" src="/imgs/user.png" alt="user" /> */}
                            <span>{user || "نا مشخص"}</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <span className="txt-muted text-center ms-4 fs-c-1 lh-sm">{moment(created_at).locale('fa').format("YYYY/MM/DD")}</span>
                            <span role="button" className="txt-c-large txt-muted ms-1"><BsBookmark /></span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default QuestionItem;