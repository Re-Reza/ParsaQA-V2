import React from "react";

import styles from "../../../public/styles/question.module.scss";

function LastQuestions() {

    const questionList = [
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت",
        "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت"
    ];

    return (
        <div>
            <div className="txt-gray3 txt-c-large mb-3">آخرین سوالات</div>
            <ul className={styles["lastQuestionList"]}>
                {
                    questionList.map((item, index) => <li className="txt-gray  txt-gray3 txt-c-normal lh-base mb-3" key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default LastQuestions;