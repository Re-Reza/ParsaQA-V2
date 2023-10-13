"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "../../../../public/styles/question.module.scss";

function RecommandedQuestion(props) {

    const [state, setState] = useState(false);
    const t = useTranslations("question");
    // <Link href={`/questions/${item.id}`}></Link>
    const questionList = [
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت"
    ];
    console.log(props)
    return (
        <div className="mb-4">
            <div className="txt-gray3 txt-c-large mb-3">{t("recommandedQuestion")}</div>
            <div className={styles["lastQuestionList"]} >
                <ul style={ {maxHeight : "600px", overflowY: "auto" } } >
                    {
                        props.data.data.slice(0, state ? props.data.data.length : 5).map((item, index) =><li key={index} className="txt-gray txt-gray3 txt-c-normal lh-base mb-3 hover-lightBlue"> <Link  href={`/questions/${item.id}?isOld=0`}>{item.title}</Link></li>)
                    }
                </ul>
                <div onClick={ () => setState( !state ) } className="text-center mt-4 txt-lightBlue" role="button">{ state ? t("close") :  t("moreQuestion") }</div>
            </div>
        </div>
    )
}

export default RecommandedQuestion;