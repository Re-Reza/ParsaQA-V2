import React from "react";

import AddNewQuestion from "../../questionComponents/AddNewQuestion";
import LastQuestions from "../../questionComponents/LastQuestions";
import styles from "../../../../public/styles/question.module.scss";

function NewQuestion() {

    return (
        <>
            <div className="mt-4" style={{ paddingBottom: "8em" }}>
                <div className="d-flex justify-content-between mb-4">
                    <div className="txt-gray3 txt-c-large mb-4">پرسش جدید</div>
                    <button className={styles["newQuestionBtn"]}>پرسش جدید</button>
                </div>

                <div className={styles["contentContainer"]}>
                    <AddNewQuestion />
                    <LastQuestions />
                </div>

            </div>
        </>
    )
}

export default NewQuestion;