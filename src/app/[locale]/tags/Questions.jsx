import React from "react";
import QuestionItem from "../categoriesComponents/QuestionItem2";
import styles from "../../../../public/styles/categories.module.scss"; 

function Questions(props) {

    const filters = [
        { title : "پیشنهادی"},
        { title : "داغ"},
        { title : "بدون پاسخ"},
        { title : "پر بازدید"}
    ];

    // const questionList = [
    //     { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  },
    //     { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  },
    //     { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  },
    //     { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  },
    //     { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  }
    // ];

    return (
        <div>

            <ul>
                {
                    props.data[0].map((item, index) => <QuestionItem tag={true} key={index} item={item} /> )
                }
            </ul> 
        </div>
    )
}

export default Questions;