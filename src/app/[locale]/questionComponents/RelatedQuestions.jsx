"use client";

import React, { useState } from "react";

import styles from "../../../../public/styles/question.module.scss";

function RelatedQuestions() {

    const [state, setState] = useState(false);

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

    console.log(questionList.slice(0, 5));

    return (
        <div className="mb-4">
            <div className="txt-gray3 txt-c-large mb-3">سوالات مرتبط(20)</div>
            <div className={styles["lastQuestionList"]} >
                <ul style={ {maxHeight : "600px", overflowY: "auto" } } >
                    {
                        questionList.slice(0, state ? questionList.length : 5).map((item, index) => <li className="txt-gray  txt-gray3 txt-c-normal lh-base mb-3" key={index}>{item}</li>)
                    }
                </ul>
                <div onClick={ () => setState( !state ) } className="text-center mt-4 txt-lightBlue" role="button">{ state ? "بستن" : "ادامه سوالات"}</div>
            </div>
        </div>
    )
}

export default RelatedQuestions;