
import React from "react";
import AnswerQuestion from "../../../../questionComponents/AnswerQuestion";
import RelatedQuestions from "../../../../questionComponents/RelatedQuestions";
import LastQuestions from "../../../../questionComponents/LastQuestions";
import QuestionItem from "../../../../categoriesComponents/QuestionItem";
import styles from "../../../../../../../public/styles/question.module.scss";

function Question() {

    const questionList = [
        { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["فلسفه", "تاریخ اسلام", "نماز"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26, answersList: [{ topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["فلسفه", "تاریخ اسلام", "نماز"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 }] }
    ]

    return (
        <>
            <div className="mt-4">

                <div className={styles["contentContainer"]}>

                    <div>
                        <ul>
                            {
                                questionList.map((item, index) => <>
                                    <QuestionItem key={index} item={item} />
                                    <ul style={{ paddingRight: "7.5em" }}>
                                        {item.answersList.map((item2, index2) => <QuestionItem key={index2} item={item2} />)}
                                    </ul>
                                </>)
                            }
                        </ul>
                        <AnswerQuestion />
                    </div>

                    <div>
                        <div className="d-flex justify-content-end mb-5">
                            <button className={styles["newQuestionBtn"]}>پرسش جدید</button>
                        </div>
                        <RelatedQuestions />
                        <LastQuestions />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Question;