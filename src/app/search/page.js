// "use client"
export const metadata = {
    title: 'نتیجه ی جستجو',
}

import React, { use } from "react";
import Header from "../homeComponents/Header";
import TopPartFilters from "../categoriesComponents/TopPartFilters";
import MainContent from "../categoriesComponents/MainContent";
import Aside from "../categoriesComponents/Aside";
import Footer from "../homeComponents/Footer";
import { provideSearchResult } from "../../dataService/searchData";
import styles from "../../../public/styles/categories.module.scss";

import Error from "../error/Error";

async function getSearchData(phrase, page){
    try{
        const responseData = (await provideSearchResult(phrase, page)).data;
        return responseData;
    }
    catch(err){
        console.log(err);
        return null;
    }
}

function Search({ searchParams }) {

    const data = use(getSearchData(searchParams.q, searchParams.page ))    

    return (
        <>
            <div className="mainContentContainer">
                <Header />

                <div style={{ marginTop: "1.6em", position: "relative", zIndex: "9" }}>

                {
                    data ? 
                    <>
                        <TopPartFilters />

                        <div className={styles["mainContainer"]}>
                            <Aside />
                            <MainContent query={searchParams.q} data={data}/>
                        </div>
                    </>
                    : <Error/>
                }

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Search;