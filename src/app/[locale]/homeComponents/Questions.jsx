"use client"
import React from "react";
import styles from "../../../../public/styles/home.module.scss";
import QuestionItem from "../categoriesComponents/QuestionItem2";
import { useTranslations } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";

function Questions(props) {

    React.useEffect(() => {
        AOS.init({
            once : true
        });
    }, []);

    const  t = useTranslations("home");

    // const filters = [
    //     { title : t("suggested")},
    //     { title : t("hot")},
    //     { title : t("answerless")},
    //     { title : t("mostVisited")}
    // ];

    const questionList = props.data.length > 6 ? props.data.slice(0, 6) :  props.data;

    return (
        <section>

            <div className="d-flex justify-content-between fs-rsp w-100">
                <div data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="400" className="txt-c-large txt-large2 txt-gray3">{t("dailyQuestions")}</div>
                {/* <ul className={styles["filtersContainer"]}>   
                    {
                        filters.map((item, index) => <li key={index} role="button" className={styles["filterItem"]}>
                            {item.title}
                        </li>)
                    }
                </ul> */}
            </div>

            <ul className="mt-5">
                {
                    questionList.map((item, index) => <div key={index} data-aos="fade-up" data-aos-delay={(index+1*100)} data-aos-duration="800">
                        <QuestionItem item={item} />
                    </div>)
                }
            </ul>

        </section>
    )
}


export default Questions;