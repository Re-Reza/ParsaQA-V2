
export const metadata = {
    title: 'دسته بندی ها',
}

import React from "react";
import Header from "../homeComponents/Header";
import TopPartFilters from "../categoriesComponents/TopPartFilters";
import MainContent from "../categoriesComponents/MainContent";
import CategoryAside from "../categoriesComponents/CategoryAside";
import Footer from "../homeComponents/Footer";

import styles from "../../../public/styles/categories.module.scss";

function Categories() {


    return (
        <>
            <div className="mainContentContainer">
                <Header />
          
                <div style={{marginTop : "1.6em", position : "relative", zIndex : "9"}}>

                    <TopPartFilters isCategory={true}/>

                    <div className={styles["mainContainer"]}>
                        <CategoryAside />
                        <MainContent isCategory={true}/>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Categories;
