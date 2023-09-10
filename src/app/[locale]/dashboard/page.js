import React from "react";

import Header from "../homeComponents/Header";
import Footer from "..//homeComponents/Footer";
import { BsBookmark } from "react-icons/bs";
import styles from "../../../public/styles/dashboard.module.scss";
import QuestionItem from "../categoriesComponents/QuestionItem";

function Dashboard() {

    const questionList = [
        { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
        { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
        { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
        { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
        { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
        { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
        { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
    ];

    return (
        <div>
            <div className="d-flex justify-content-between mb-4">
                <div className="d-flex">
                    <span className="txt-gray3 txt-c-large">سوالات پرسیده شده</span>
                    <span className="txt-gray ms-2 fw-500">5 سوال</span>
                </div>
                <div className="txt-lightBlue" role="button">
                    پست های ذخیره شده
                    <span className="txt-c-large ms-2"><BsBookmark/></span>
                </div>
            </div>

            <ul>
                {
                    questionList.map((item, index) => <QuestionItem item={item} key={index} />)
                }
            </ul>
        </div>
    )
}

export default Dashboard;