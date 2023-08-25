import React from "react";

import Header from "../homeComponents/Header";
import TagAside from "./TagAside";
import Footer from "../homeComponents/Footer";
import Questions from "./Questions";
import styles from "../../../public/styles/categories.module.scss";

function Tag() {

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