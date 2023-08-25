export const metadata = {
    title: 'جستجو',
}

import React, { use } from "react";
import Header from "../homeComponents/Header";
import TopPartFilters from "../categoriesComponents/TopPartFilters";
import MainContent from "../categoriesComponents/MainContent";
import Aside from "../categoriesComponents/Aside";
import Footer from "../homeComponents/Footer";
import { provideSearchResult } from "../../dataService/searchData";
import styles from "../../../public/styles/categories.module.scss";

async function getSearchData(phrase){
    const responseData = (await provideSearchResult(phrase)).data;
    console.log(responseData);
    return responseData.data;
}

function Search({ searchParams }) {

    console.log(searchParams.q)
    const data = use(getSearchData(searchParams.q))
    console.log(data);
    
    return (
        <>
            <div className="mainContentContainer">
                <Header />

                <div style={{ marginTop: "1.6em", position: "relative", zIndex: "9" }}>

                    <TopPartFilters />

                    <div className={styles["mainContainer"]}>
                        <Aside />
                        <MainContent />
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Search;