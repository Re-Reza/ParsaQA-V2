import React, { use } from "react";
import AnswerQuestion from "../../questionComponents/AnswerQuestion";
import RecommandedQuestion from "../../questionComponents/RecommandedQuestion";
import RelatedQuestions from "../../questionComponents/RelatedQuestions";
import QuestionContent from "../../questionComponents/QuestionContent";
import { getQuestionContent } from "../../../../dataService/questionData";
import Error from "../../error/Error";
import styles from "../../../../../public/styles/question.module.scss";

async function getQestionData(id){
    try{
        const responseData = (await getQuestionContent(id)).data;
        console.log(responseData);
        return responseData;
    }
    catch(err) {
        // console.log(err)
        return null;
    }
}

function Question({ params }){
    const responseData = use( getQestionData(params.question) );
    
    return (
        <div className="mt-4">

            <div className={styles["contentContainer"]}>
                <div>
                    {
                        responseData ? 
                        <div className="mb-4">
                            <QuestionContent locale={params.locale} data={responseData.data} />
                        </div>
                        : 
                        <Error/>
                    }
                    <AnswerQuestion />
                </div>

                <div>
                    <RelatedQuestions />
                    <RecommandedQuestion />
                </div>

            </div>
            
        </div>
    )
}

export default Question;