import React, { use } from "react";
import Header from "../../homeComponents/Header";
import TagAside from "../TagAside";
import Footer from "../../homeComponents/Footer";
import Questions from "../Questions";
import { getTagQuestions } from "../../../dataService/tagData";
import styles from "../../../../public/styles/categories.module.scss";

function getData(tagName){
    try{
        // const data = await getTagQuestions(tagName);
        return data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}

function Tag({ params }) {
    // const data = use(getData(params.tag));
    console.log(params.tag)
    return (
        <>
            <div className="mainContentContainer">
                <Header />
                <div className={styles["tag-mainContent"]}>
                    <TagAside />
                    <Questions />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Tag; 