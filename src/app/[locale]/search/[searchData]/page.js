export const metadata = {
    title: 'نتیجه ی جستجو',
}

import React, { use } from "react";
// import { useSearchParams, useParams } from "next/navigation";
import Header from "../../homeComponents/Header";
// import TopPartFilters from "../../categoriesComponents/TopPartFilters";
import MainContent from "../../categoriesComponents/MainContent";
// import VoiceMainContent from "../MainContent";
import Aside from "../../categoriesComponents/Aside";
import Footer from "../../homeComponents/Footer";
import { provideSearchResult, voiceSearch, advancedSearch } from "../../../../dataService/searchData";
import PaginationCount from "../../categoriesComponents/PaginationCount"
import styles from "../../../../../public/styles/categories.module.scss";
import Error from "../../annotations/Error";


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

async function getAdvanceSearch(tags, marjas, any_words, phrases, sources, non_words, all_words, langs, lang, page){
    try {
        const responseData = await advancedSearch({
            page : page ? page : 1,
            per_page : 12,
            answered: false,
            lang,
            marjas, 
            tags,
            langs,
            any_words,
            sources,
            non_words,
            all_words,
            phrases
        });
        return responseData.data;
    }
    catch ( err ) {
        // console.log(err);
    }
}

function Search(ctx) {
    const { params : { locale, searchData }, searchParams : {page, audioF, q, tags, langs, sources, marjas, any_words, all_words, non_words } } = ctx;
    function convertToArray(data){
        const mainData = data.substring(data.indexOf('[')+1, data.indexOf(']'));
        const itemsLits = mainData.length==0? ["*"]: mainData.split(",");
        return itemsLits;
    }

    // let audioFile;
    let data;
    // if(searchData == "audioSearch") {
    //     audioFile = JSON.parse(audioF);
    // }
    if(searchData == "advanceSearch") {
        data = ( use( getAdvanceSearch(convertToArray(tags), convertToArray(marjas), convertToArray(any_words), [q], convertToArray(sources), convertToArray(non_words), convertToArray(all_words), convertToArray(langs), locale, page) ) );
    }
    else{
        const search = decodeURIComponent(searchData);
        data = use(getSearchData(search, [locale], page )); 
    }

    let errorMsg = null;
    if(data == null){
        errorMsg = "در دریافت اطلاعات خطایی رخ داد است"
    }
    else if( data[0].questions == null){
        errorMsg = "محتوایی برای سوال مورد نظر شما یافت نشد"
    }

    const paginationPath = searchData == "advanceSearch" ? `/search/${searchData}?q=${q}&tags=${tags}&langs=${langs}&sources=${sources}&marjas=${marjas}&any_words=${any_words}&all_words=${all_words}&non_words=${non_words}` : `/search/${searchData}`;

    return (
        <>
            <div className="mainContentContainer">
                <Header lang={locale}/>

                <div style={{ marginTop: "1.6em", position: "relative", zIndex: "3" }}>

                    {/* <TopPartFilters /> */}

                    <div className={styles["mainContainer"]}>
                        <Aside />
                        <div>
                            {
                                errorMsg == null ? 
                                <>
                                    <MainContent query={searchData}  data={data[0].questions}/>
                                    <PaginationCount path={paginationPath} oneQuery={searchData == "advanceSearch" ? false : true} pageItems={12} currentPage={page ? page : 1 } totalCount={data[0].meta.total_count}/>
                                </>
                                : <Error text={errorMsg} />
                            }
                        </div>
                        
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default Search;