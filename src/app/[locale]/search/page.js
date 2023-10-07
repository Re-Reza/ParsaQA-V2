"use client"

// export const metadata = {
//     title: 'نتیجه ی جستجو',
// }

import React, { use } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Header from "../homeComponents/Header";
import TopPartFilters from "../categoriesComponents/TopPartFilters";
import MainContent from "../categoriesComponents/MainContent";
import Aside from "../categoriesComponents/Aside";
import Footer from "../homeComponents/Footer";
import { provideSearchResult } from "../../../dataService/searchData";
import PaginationCount from "../categoriesComponents/PaginationCount"
import styles from "../../../../public/styles/categories.module.scss";

import Error from "../error/Error";

async function getSearchData(phrase, langs, page){
    try{
        const responseData = (await provideSearchResult({
            phrase,
            langs,
            page : page ? page : 1,
            per_page : 12,
            tags: [
                "*"
            ],
            sources: [
                "*"
            ],
            marjas: [
                "*"
            ]
        } ));

        return responseData.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}

function Search() {
    const searchParams = useSearchParams();
    const { locale } = useParams();
    const search = searchParams.get('q').replaceAll("-", " ")
    const tags = decodeURIComponent(searchParams.get('tags'))
    console.log(tags)
    const page = searchParams.get('page');
    const data = use(getSearchData(search, [locale], page )); 
    console.log(data[0].meta.total_count)

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
                            <div>
                                <MainContent query={search}  data={data[0].users}/>
                                <PaginationCount path={`/search?q=${searchParams.get('q')}`} pageItems={12} currentPage={page ? page : 1 } totalCount={data[0].meta.total_count}/>
                            </div>
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