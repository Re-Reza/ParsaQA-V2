"use client"

export const metadata = {
    title: 'نتیجه ی جستجو',
}

import React, { use } from "react";
import { useSearchParams, useParams } from "next/navigation";
import Header from "../../homeComponents/Header";
import TopPartFilters from "../../categoriesComponents/TopPartFilters";
import MainContent from "../../categoriesComponents/MainContent";
import Aside from "../../categoriesComponents/Aside";
import Footer from "../../homeComponents/Footer";
import { provideSearchResult, voiceSearch } from "../../../../dataService/searchData";
import PaginationCount from "../../categoriesComponents/PaginationCount"
import styles from "../../../../../public/styles/categories.module.scss";
import createFile from "./createFile"
import Error from "../../error/Error";


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
        // console.log(err);
        return null;
    }
}

async function searchVoice(lang, audioFile) {
    try {
        const responseData  = await voiceSearch({
            voice : audioFile,
            language : lang
        });
        console.log(responseData.data);
        return responseData.data;
    }
    catch ( err ) {
        // console.log(err);
        return null;
    }
}

function Search() {
    const searchParams = useSearchParams();
    const { locale, searchData } = useParams();
    const audioF = searchParams.get('audioF')
    // const tags = decodeURIComponent(searchParams.get('tags'))
    const page = searchParams.get('page');

    // console.log(data[0].meta.total_count)
    // console.log(ctx)
    // const { params : { locale, searchData }, searchParams : {page, audioF } } = ctx;
    // console.log(searchData)
    if(searchData == "audio") {
        // const search = decodeURIComponent(searchData);
        // console.log(search)
        console.log(audioF)
        const audioFile = JSON.parse(audioF);
        console.log(audioFile)
        // console.log(audioFile.p);
        const file = new File([audioFile], 'out.webm', { type: "audio/webm" });
        console.log(file)
        const data = use( searchVoice( locale, file ) );
        console.log(data)
    }
    
    // console.log(search)
    // const data = use(getSearchData(search.replaceAll("-", " "), [locale], page )); 

    return (
        <>
            <div className="mainContentContainer">
                <Header lang={locale}/>

                <div style={{ marginTop: "1.6em", position: "relative", zIndex: "9" }}>
{/* 
                {
                    data ? 
                    <>
                        <TopPartFilters />

                        <div className={styles["mainContainer"]}>
                            <Aside />
                            <div>
                                <MainContent query={search}  data={data[0].users}/>
                                <PaginationCount path={`/search/${search}`} oneQuery={true} pageItems={12} currentPage={page ? page : 1 } totalCount={data[0].meta.total_count}/>
                            </div>
                        </div>
                    </>
                    : <Error/>
                } */}

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Search;