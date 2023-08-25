import React from "react";

import styles from "../../../public/styles/home.module.scss";
import QuestionItem from "../categoriesComponents/QuestionItem";

function Questions() {

    const filters = [
        { title : "پیشنهادی"},
        { title : "داغ"},
        { title : "بدون پاسخ"},
        { title : "پر بازدید"}
    ];

    const questionList = [
        { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  },
        { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  },
        { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  },
        { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  },
        { topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", tags: ["روانشناسی", "خود برتربینی", "اخلاق و تربیت اسلامی"], user: "@Rasekhoon ", vots: 10, views: 2, answers: 1 , time: 2  }
    ];

    return (
        <section >

            <div className="d-flex justify-content-between fs-rsp w-100">
                <div className="txt-c-large txt-large2 txt-gray3">پرسش های روز</div>
                <ul className={styles["filtersContainer"]}>   
                    {
                        filters.map((item, index) => <li key={index} role="button" className={styles["filterItem"]}>
                            {item.title}
                        </li>)
                    }
                </ul>
            </div>

            <ul className="mt-5">
                {
                    questionList.map((item, index) => <QuestionItem item={item} key={index} />)
                }
            </ul>

        </section>
    )
}


export default Questions;