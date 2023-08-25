
import React from "react";
import AnswerQuestion from "../../../../questionComponents/AnswerQuestion";
import RelatedQuestions from "../../../../questionComponents/RelatedQuestions";
import LastQuestions from "../../../../questionComponents/LastQuestions";
import QuestionItem from "../../../../categoriesComponents/QuestionItem";
import styles from "../../../../../../public/styles/question.module.scss";

function Question() {

    const answers = [
        {
            topic: "برای مدیریت خود برتربینی در خود و دیگران، چه راهکاری مناسب است؟", readingTime: 5, answerTxt: "توجه به این مطلب لازم است که حقیقت امتحاناتی که انسان می‌دهد این است که استعدادهای او شکوفا می‌شود و به کمال مناسب خود میرسد چه در مسائل علمی باشد یا مسائل عملی و از طرفی به طور طبیعی در چنین موقعیتی یک حالت نگرانی و دلهره پیدا می کند بویژه وقتی به توجه و داوری دیگران متوجه می شود ‌که آیا می‌توانم از عهدۀ امتحان علمی بر بیایم؟ آیا آبرویم میریزد و شخصیتم از بین میرود؟ امّا با توجّه به نکتۀ فوق، بداند که زندگی انسان هم در این عالم براساس امتحان است، همواره امتحانات گوناگونی تا آخر عمر بر سر راه انسان قرار دارد. از این جهت انسان باید اعتماد و توکّل به خدای متعال و استعانت از خدای متعال داشته باشد. چون خدای متعال ما را این‌گونه آفریده است.ثانیاً باید نسبت به آنچه می‌خواهد امتحان دهد آگاهی مناسب را داشته باشد در این صورت به داشته‌ی خود اعتماد کند زیرا یکی از راه‌های رفع اضطراب، توجّه به موهبتی است که خدای متعال به انسان کرده و می‌خواهد این موهبت را ظهور دهد. بنابراین بسم الله گفتن، توجّه به خدای متعال کردن، توجّه به معلومات خود و از علم خدای متعال کمک گرفتن در موفّقیّت، موجب می‌شود که انسان نسبت به امتحان حالت اضطراب را از بین ببرد یا اضطراب بر او عارض نشود. .", tags: ["اخلاق و تربیت اسلامی", "خودبرتربینی", "روانشناسی"], user: "Rasekhoon", vots: 7, views: 2, answers: 15, time: 26,
            comments: [{ tags: [], topic: "سلام ممنونم از شما، مفید بود واقعا", user: "AliAbbasi_71", vots: 7, views: 2, answers: 15, time: 26 }]
        }
    ]

    return (
        <>
            <div className="mt-4">

                <div className={styles["contentContainer"]}>

                    <div>
                        <div className="mb-4">
                            {
                                <ul>
                                    {
                                        answers.map((item, index) =>
                                            <>
                                                <QuestionItem key={index} item={item} isAnswer={true} />
                                                <ul>
                                                    {
                                                        item.comments.map((item, index) => <QuestionItem key={index} item={item} />)
                                                    }
                                                </ul>
                                            </>
                                        )
                                    }
                                </ul>
                            }
                        </div>
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