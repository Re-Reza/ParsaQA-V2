export const metadata = {
    title: 'سوال',
}

import React, { use } from "react";
// import AnswerQuestion from "../../questionComponents/AnswerQuestion";
import RecommandedQuestion from "../../questionComponents/RecommandedQuestion";
import RelatedQuestions from "../../questionComponents/RelatedQuestions";
import QuestionContent from "../../questionComponents/QuestionContent";
import { getQuestionContent, provideSimilarQuestions, getQuestionContentOldId } from "../../../../dataService/questionData";
import { getLastQuestions } from "../../../../dataService/homeData";
import Error from "../../annotations/Error";
import styles from "../../../../../public/styles/question.module.scss";

async function getQestionData(id){
    try{
        const responseData = (await getQuestionContent(id)).data;
        return responseData;
    }
    catch(err) {
        console.log(err)
        return null;
    }
}

async function getQestionDataOldId(id) {
    try{
        const responseData = (await getQuestionContentOldId(id)).data;
        return responseData;
    }
    catch(err) {
        // console.log(err)
        return null;
    }
}

async function getRecommendedQuestions(language){
    try{
        const responseData = (await getLastQuestions(language)).data;
        return responseData;
    }
    catch(err) {
        // console.log(err)
        return null;
    }
}

async function getSimilarQuestions(id){
    try{
        const responseData = (await provideSimilarQuestions(id)).data;
        return responseData;
    }
    catch(err) {
        // console.log(err)
        return null;
    }
}

function Question({ params, searchParams }){
    
    const recommendedQuestion = use( getRecommendedQuestions(params.locale) );
    // const similarQuestion = use( getSimilarQuestions(params.question) );
    
    let responseData;
    if(searchParams.isOld == 1) { 
        responseData = use( getQestionDataOldId(params.question) );
    }
    else {
        responseData = use( getQestionData(params.question) );
    }

    return (
        <div className="mt-4">

            <div className={styles["contentContainer"]}>
                <div className={styles["QuestionContent"]}>
                    {
                        responseData ? 
                        <div className={"mb-4"}>
                            <QuestionContent data={responseData.data} />
                        </div>
                        : 
                        <Error/>
                    }
                    {/* <AnswerQuestion id={params.question}/> */}
                </div>

                <div>
                    {/* { similarQuestion ? <RelatedQuestions data={similarQuestion} /> : <></>} */}
                    { recommendedQuestion ? <RecommandedQuestion data={recommendedQuestion} /> : <></>}
                </div>

            </div>
            
        </div>
    )
}

export default Question;