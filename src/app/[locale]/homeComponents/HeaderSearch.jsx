"use client"

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { MdSavedSearch } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import VoiceRecorder from "./VoiceRecorder";
import AdvancedSearch from "./AdvancedSearch";
import { autoComplete, provideAllSources, provideAllTags, provideMarjas } from "../../../dataService/searchData";
import styles from "../../../../public/styles/headerFooter.module.scss";
import { useTranslations } from "next-intl";

function HeaderSearch(props) {

    const t = useTranslations("header");

    const [ state, setState ] = useState({
        activeButton: -1,
        showFilters : false,
        recommendations : [],
        sources : [],
        marjas : [],
        tags: [],
        langs:[],
        selectedSources : [],
        selectedMarjas : [],
        selectedTags : [],
        any_words : [], 
        non_words : [],
        all_words : [],
        isAdvanced : false,
    });

    function setAdvandedSeacrhData(all_words, non_words, any_words, langs, tags, sources, marjas){
        setState({
            ...state,
            isAdvanced : true,
            selectedTags : tags,
            non_words,
            langs,
            any_words,
            all_words,
            selectedSources: sources,
            selectedMarjas: marjas
        });
    }

    const { marjas, sources, tags, all_words, langs,non_words ,any_words, isAdvanced } = state;
    useEffect(() =>{ ( async () => {
        
        if( marjas.length == 0 || sources.length == 0 || tags.length == 0 ){
            const sourcesData = (await provideAllSources()).data;
            const marjasData = (await provideMarjas()).data;
            const tagsData = (await provideAllTags()).data;
            setState({
                ...state,
                tags : tagsData.data,
                marjas : marjasData.data,
                sources : sourcesData.data
            });
        }

    })() } , [state.showFilters])

    const searchInput = useRef(null);

    // const buttons = [
    //     { title: "حدیث", id: 0 },
    //     { title: "احکام", id: 1 },
    //     { title: "قرآن کریم", id: 2 },
    //     { title: "تاریخ و سیره", id: 3 },
    //     { title: "اخلاق و تربیت اسلامی", id: 4 },
    //     { title: "اجتماعی سیاسی", id: 5 },
    // ];

    // const tags = ["نماز", "حجاب", "قرآن"]

    function setNewButton(id) {
        setState({
            ...state,
            activeButton: id == state.activeButton ? -1 : id
        });
    }

    const { push } = useRouter();
    function searchRequest(){
        console.log("in this")
        const inputValue = searchInput.current.value.replaceAll(" ", "-");
        console.log(isAdvanced)
        if( isAdvanced )
        {
            if(inputValue.trim() != "" && inputValue != null ) {
                push(`/search/${inputValue}?isAdvanced=1&tags=${state.tags}&langs=${langs}&sources=${sources}&all_words=${all_words}&marjas=${marjas}&any_words=${any_words}&all_words=${all_words}&non_words=${non_words}`);
            }
        }
        else {
            if(inputValue.trim() != "" && inputValue != null ) {
                push(`/search/${inputValue}`);
            }
        }
    }

    let timer = null;
    function getRecommendations(){
        //set timer to send request after user typing ends
        clearTimeout(timer);

        timer = setTimeout(() => {
            let data = {
                text : null,
                lang : null
            }
            const value = searchInput.current.value.trim()
            if( data.text != value ){
                data = {
                    text : value,
                    lang : props.lang
                }
                console.log(data)
                autoComplete(data).then( response => {
                    setState({
                        ...state,
                        recommendations : response.data
                    });
                }).catch( err => {
                    console.log(err)
                    setState({
                        ...state,
                        recommendations : []
                    });
                });
            }
        }, 600);
 
    }

    const fillInput = (value) => {
        searchInput.current.value = value;
        searchRequest();
        setState({
            ...state,
            recommendations : []
        });
    }

    return (
        <div className="mt-4 d-flex flex-column align-items-center">

            <div className={styles["header-searchContainer"]}>
                <div className="d-flex w-100 flex-column flex-md-row align-items-center">
        
                    <div className="mb-md-0 mb-4 position-relative" style={{minWidth: "83%"}}>
                        <div className="d-flex">
                            <button onClick={ ()=> { setState({...state, showFilters : !state.showFilters})}} title="نمایش فیلتر ها" className="text-white txt-c-large txt-large me-4">{ state.showFilters ? <IoIosArrowUp/> : <IoIosArrowDown/>}</button>
                            <div className={styles["header-inputSearchContainer"]+" w-100 d-flex justify-content-between align-items-center"}>
                                <div className="w-100 d-flex position-relative align-items-center">
                                    <button onClick={searchRequest} className="me-2 txt-c-large" role="button"><BsSearch /></button>
                                    <input onKeyUp={getRecommendations} ref={searchInput} style={{ width : "90%"}} className={styles["input"]} placeholder={t("searchInput")} type="text" />
                                    <ul className={styles["recommandation"]+ ( state.recommendations.length > 0 ? " "+styles["showRecommand"] : "" ) }>
                                    {
                                        state.recommendations.map((item, index) => <li role="button" onClick={() => fillInput(item.key)} className="txt-muted txt-c-medium mt-4 hover-lightBlue d-flex justify-content-between" key={index}>
                                            <div>{item.key}</div>
                                            {/* <div role="button" className="fw-c-500"><AiOutlineClose/></div> */}
                                        </li> )
                                    }
                                    </ul>   
                                </div>
                                <VoiceRecorder/>
                            </div>
                        </div>   
                    </div>

                    <div>
                        {
                            props.question == true ?
                                <div className="txt-gray3 ms-4">
                                    <div className="d-flex align-items-center form-check form-switch mb-1">
                                        <input className="form-check-input" role="switch" type="checkbox" id="onlineUsers" />
                                        <label className="form-check-label" htmlFor="onlineUsers" >
                                            از بین منابع آنلاین
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center form-check form-switch">
                                        <input  className="form-check-input" role="switch" type="checkbox" id="userSwitch" />
                                        <label className="form-check-label" htmlFor="userSwitch">
                                            از بین کاربران شبکه پارسا
                                        </label>
                                    </div>
                                </div>
                                :
                                <button onClick={searchRequest} className={styles["advancedSearchBtn"] + " lh-base ms-3"}>{t("advancedSearch")}<span className="ms-2 txt-c-large txt-large"><MdSavedSearch/></span></button>
                        }
                    </div>
                </div>

                {
                    state.showFilters ? 
                    <AdvancedSearch setAdvandedSeacrhData={setAdvandedSeacrhData} tags={tags} sources={sources} marjas={marjas} /> : <></>
                }

            </div>

        </div>
    )
}

{/* <div className={styles["headerSearch-filterButton-container"]}>
    {
        buttons.map(item => <button className={styles["headerSearch-filterButton"] + " " + (item.id == state.activeButton ? styles["active-filterButton"] : "")} onClick={() => setNewButton(item.id)} key={item.id}>{item.title}</button>)
    }
</div> */}


export default HeaderSearch;