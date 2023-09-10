"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
// import QuestionItem from "./QuestionItem";
import QuestionItem from "./QuestionItem2";
import Pagination from "./Pagination";
import { categoryList } from "./treeList";
import styles from "../../../../public/styles/categories.module.scss";

function MainContent(props) {

    const { data, links, meta } = props.data;
    // const searchParams = useSearchParams();
    // const indexs = searchParams.get('q').split("-")
    // const titles = [];
    // indexs.map((item, index) => {

    //     switch (index) {
    //         case 0:
    //             titles.push(categoryList[item].title)
    //             break;
    //         case 1:
    //             titles.push(categoryList[indexs[0]].level1List[item].title)
    //             break;
    //         case 2:
    //             titles.push(categoryList[indexs[0]].level1List[indexs[1]].level2List[item].title)
    //             break;
    //         case 3:
    //             titles.push(categoryList[indexs[0]].level1List[indexs[1]].level2List[indexs[2]].level3List[item].title)
    //             break;
    //         case 4:
    //             titles.push(categoryList[indexs[0]].level1List[indexs[1]].level2List[indexs[2]].level3List[indexs[3]].level4List[item].title)
    //             break;
    //         case 5:
    //             titles.push(categoryList[indexs[0]].level1List[indexs[1]].level2List[indexs[2]].level3List[indexs[3]].level4List[indexs[4]].level5List[item].title)
    //             break;
    //         case 6:
    //             titles.push(categoryList[indexs[0]].level1List[indexs[1]].level2List[indexs[2]].level3List[indexs[3]].level4List[indexs[4]].level5List[indexs[5]].level6List[item].title)
    //             break;
    //     }
    // });

    // const questionList = [
    //     { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
    //     { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
    //     { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
    //     { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
    //     { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
    //     { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
    //     { topic: "نظر فلاسفه غربی راجع به جایگاه نماز و یا هرگونه عبادت و ریاضت به قصد  تعالی روحی چیست؟ لطفا منبع معرفی شود", tags: ["نماز", "فلسفه", "تاریخ اسلام"], user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 },
    // ];

    return (
        <section>

            <article className="d-flex justify-content-between mb-4 align-items-center">

                {/* <ul className={styles["bread-container"]}>
                    {
                        titles.map((item, index) => <li className={"fw-500 " + (index == titles.length - 1 ? " txt-gray3" : "txt-lightBlue")} key={index}>{item}
                            {index == titles.length - 1 ? <></> : <span className="ms-2 me-2 txt-gray3"><MdKeyboardArrowLeft /></span>}
                        </li>)
                    }
                </ul> */}

            </article>

            <ul>
                {
                    props.data.data.map((item, index) => <QuestionItem key={index} item={item} />)
                }
            </ul>

            <Pagination data={{ meta, links, query : props.query }}/>
            

        </section>
    )
}

export default MainContent;