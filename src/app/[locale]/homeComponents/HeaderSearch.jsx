"use client"

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { MdSavedSearch } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import Multiselect from 'multiselect-react-dropdown';
import { IoMdAdd} from "react-icons/io";
import VoiceRecorder from "./VoiceRecorder";
// import AdvancedSearch from "./AdvancedSearch";
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
        allWords: [],
        nonWords : [],
        anyWords : [],
        selectedTags : [],
        selectedMarjas : [],
        selectedSources : [],
        selectedLangs : [],
        focusedInput : null,
        // isAdvanced : false,
    });

    // function setAdvandedSeacrhData(all_words, non_words, any_words, langs, tags, sources, marjas){
    //     setState({
    //         ...state,
    //         selectedTags : tags,
    //         non_words,
    //         langs,
    //         any_words,
    //         all_words,
    //         selectedSources: sources,
    //         selectedMarjas: marjas
    //     });
    // }

    const { marjas, sources, tags, allWords, nonWords, anyWords, selectedLangs, selectedMarjas, selectedSources, selectedTags, focusedInput } = state;
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

    // function setNewButton(id) {
    //     setState({
    //         ...state,
    //         activeButton: id == state.activeButton ? -1 : id
    //     });
    // }

    const { push } = useRouter();

    function generateQuery(list, key){
        let query = [];
        list.forEach(item => {
            console.log(item)
            // query+=`&${key}=${item}`
            query.push(item)
        });
        return `&${key}=[${query}]`;
    }

    function searchRequest(isAdvanced){
        const inputValue = searchInput.current.value;
        if( isAdvanced )
        {
            if(inputValue.trim() != "" && inputValue != null ) {
                const tagsQuery = generateQuery(selectedTags, "tags");
                const sourceQuery = generateQuery(selectedSources, "sources");
                const marjasQuery = generateQuery(selectedMarjas, "marjas");
                const langsQuery = generateQuery(selectedLangs, "langs");
                const any_wordsQuery = generateQuery(anyWords, "any_words");
                const all_wordsQuery = generateQuery(allWords, "all_words");
                const non_wordsQuery = generateQuery(nonWords, "non_words")
                push(`/search/advanceSearch?q=${inputValue.trim()}${tagsQuery}${sourceQuery}${marjasQuery}${langsQuery}${any_wordsQuery}${all_wordsQuery}${non_wordsQuery}`);
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
                    // console.log(err)
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


    function toggleItem(list, key){
        const newData = list.map(item => item.title );
        setState({
            ...state,
            [key] : newData
        });
    }

    const transformedSources = sources.map(item => ({ title : item.translates[props.lang] }) );

    function removeItem(rItem, key){
        const filteredList = state[key].filter( item => item !== rItem)
        setState({
            ...state,
            [key] : filteredList
        }); 
    }

    function addItem(key){
        console.log(key)
        const newItem = document.getElementById(`${key}Input`).value;
        document.getElementById(`${key}Input`).value = "";
        if( newItem.trim() !== "" )
            setState({
                ...state,
                [key] : [
                    ...state[key],
                    newItem
                ]
            });
    }

    function toggleShowSelectedList (hide, input) {
        setState({
            ...state,
            focusedInput : hide ? null : input
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
                                    <button onClick={()=>searchRequest(false)} className="me-2 txt-c-large" role="button"><BsSearch /></button>
                                    <input onKeyUp={getRecommendations} ref={searchInput} style={{ width : "90%"}} className={styles["input"]} placeholder={t("searchInput")} type="text" />
                                    <ul className={styles["recommandation"]+ ( state.recommendations.length > 0 ? " "+styles["showRecommand"] : "" ) }>
                                        <>
                                            <li onClick={() => setState({ ...state, recommendations : []}) } role="button" className="text-danger txt-c-large " key={state.recommendations.length+1}><AiOutlineClose/></li>
                                        {
                                            state.recommendations.map((item, index) => <li role="button" onClick={() => fillInput(item.key)} className="txt-muted txt-c-medium mt-4 hover-lightBlue d-flex justify-content-between" key={index}>
                                            <div>{item.key}</div>
                                            {/* <div role="button" className="fw-c-500"><AiOutlineClose/></div> */}
                                            </li> )
                                        }
                                        </>
            
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
                                <button onClick={()=>searchRequest(true)} className={styles["advancedSearchBtn"] + " lh-base ms-3"}>{t("advancedSearch")}<span className="ms-2 txt-c-large txt-large"><MdSavedSearch/></span></button>
                        }
                    </div>
                </div>

                {
                    state.showFilters ? 
                    <>
                        <div className={styles["advancedFilterContainer"]}>
                            
                            <div className="d-flex flex-column flex-md-row  align-items-center justify-content-between">
                                <div className="me-4 mb-3 mb-md-0  txt-gray3 fw-500">
                                    <label>{t("allWords")}</label>
                                    <br/>
                                </div>
                                <div className="position-relative">
                                    <div className="d-flex">
                                        <input onFocus={() => toggleShowSelectedList(false , "allWords") }  id="allWordsInput" type="text" className="form-control" />
                                        <button onClick={()=>addItem("allWords")} className={styles["addBtn"]+" ms-2"}><IoMdAdd/></button>
                                    </div>
                                    {
                                        allWords.length > 0 && focusedInput == "allWords" ? 
                                            <div className={styles["filterListContainer"]}>
                                                <button onClick={()=> toggleShowSelectedList(true)} className="text-danger mb-3 txt-c-medium d-flex" ><AiOutlineClose /></button>
                                                <ul className={styles["filterInput"]}>
                                                {
                                                    allWords.map((item, index) => <li className={styles["tag"]+" text-break"} key={index}>
                                                        <span className="me-2 text-danger" role="button" onClick={()=>removeItem(item, "allWords")}><AiOutlineClose /></span>
                                                        <span>{item}</span>
                                                    </li>)
                                                }
                                                </ul>
                                            </div>
                                        : <></>
                                    }
                                </div>
                            </div>
                
                            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                                <div className="me-4 mb-3 mb-md-0 txt-gray3 fw-500">
                                    <label>{t("betweenLanguages")}</label>
                                </div>
                                <div className={styles["optionsListContainer"]}>
                                    <Multiselect
                                        style={ { border  : "none" } }
                                        placeholder={t("multiSelect")}
                                        isObject={true}
                                        onRemove={(list) => toggleItem(list, "selectedLangs") }
                                        onSelect={(list) => toggleItem(list, "selectedLangs") }
                                        displayValue="key"
                                        options={[
                                            { key : "فارسی", title: "fa" }, { key : "انگلیسی", title: "en"  }, { key : "عربی", title: "ar"  },
                                        ]}
                                    />
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center flex-column flex-md-row  justify-content-between">
                                <div className="me-4 mb-3 mb-md-0  txt-gray3 fw-500">
                                    <label>{t("anyWords")}</label>
                                    <br/>
                                </div>
                                <div className="position-relative"> 
                                    <div className="d-flex">
                                        <input onFocus={() => toggleShowSelectedList(false , "anyWords") }  type="text" id="anyWordsInput" className="form-control" />
                                        <button onClick={()=>addItem("anyWords")} className={styles["addBtn"]+" ms-2"}><IoMdAdd/></button>
                                    </div>
                                    {
                                        anyWords.length > 0 && focusedInput == "anyWords" ? 
                                        <div className={styles["filterListContainer"]}>
                                            <button onClick={()=> toggleShowSelectedList(true)} className="text-danger mb-3 txt-c-medium d-flex" ><AiOutlineClose /></button>
                                            <ul className={styles["filterInput"]}>
                                            {
                                                anyWords.map((item, index) => <li className={styles["tag"]+" text-break"} key={index}>
                                                    <span className="me-2 text-danger" role="button" onClick={()=>removeItem(item, "anyWords")}><AiOutlineClose /></span>
                                                    <span>{item}</span>
                                                </li>)
                                            }
                                            </ul>
                                        </div>
                                        : <></>
                                    
                                    }
                                </div>
                            </div>
                
                            <div className="d-flex align-items-center flex-column flex-md-row  justify-content-between">
                                <div className="me-4 mb-3 mb-md-0  txt-gray3 fw-500">
                                    <label>{t("marjas")}</label>
                                </div>
                                <div className={styles["optionsListContainer"]}>
                                    <Multiselect
                                        placeholder={t("multiSelect")}
                                        isObject={true}
                                        displayValue="title"
                                        onKeyPressFn={function noRefCheck(){}}
                                        onRemove={(item)=>toggleItem(item, "selectedMarjas")}
                                        onSelect={(item)=>toggleItem(item, "selectedMarjas")}
                                        options={marjas}
                                    />
                                </div>
                            </div>
                            
                            <div className="d-flex align-items-center flex-column flex-md-row  justify-content-between">
                                <div className="me-4 mb-3 mb-md-0  txt-gray3 fw-500">
                                    <label>{t("nonWords")}</label>
                                </div>
                                <div className="position-relative">
                                    <div className="d-flex">
                                        <input onFocus={() => toggleShowSelectedList(false , "nonWords") } id="nonWordsInput" type="text" className="form-control"/>
                                        <button onClick={()=>addItem("nonWords")} className={styles["addBtn"]+" ms-2"} ><IoMdAdd/></button>
                                    </div>
                                    {
                                        nonWords.length > 0 && focusedInput == "nonWords" ? 
                                        <div className={styles["filterListContainer"]}>
                                            <button onClick={()=> toggleShowSelectedList(true)} className="text-danger mb-3 txt-c-medium d-flex" ><AiOutlineClose /></button>
                                            <ul className={styles["filterInput"]}>
                                            {
                                                nonWords.map((item, index) => <li className={styles["tag"]+" text-break"} key={index}>
                                                    <span className="me-2 text-danger" role="button" onClick={()=>removeItem(item, "nonWords")}><AiOutlineClose /></span>
                                                    <span>{item}</span>
                                                </li>)
                                            }
                                            </ul>
                                        </div>
                                        : 
                                        <></>
                                    
                                    }
                                </div>
                            </div>
                
                            <div className="d-flex align-items-center flex-column flex-md-row  justify-content-between">
                                <div className="me-4 mb-3 mb-md-0  txt-gray3 fw-500">
                                    <label>{t("betweenTags")}</label>
                                </div>
                                <div className={styles["optionsListContainer"]}>
                                    <Multiselect
                                        placeholder={t("multiSelect")}
                                        isObject={true}
                                        displayValue="title"
                                        onKeyPressFn={function noRefCheck(){}}
                                        onRemove={(item)=>toggleItem(item, "selectedTags")}
                                        onSelect={(item)=>toggleItem(item, "selectedTags")}
                                        options={tags}
                                    />
                                </div>
                            </div>
                
                            <div className="d-flex align-items-center flex-column flex-md-row  justify-content-between">
                                <div className="me-4 mb-3 mb-md-0 txt-gray3 fw-500">
                                    <label>{t("sources")}</label>
                                </div>
                                <div className={styles["optionsListContainer"]}>
                                    <Multiselect
                                        // hideSelectedList
                                        emptyRecordMsg={t("noMoreOptions")}
                                        placeholder={t("multiSelect")}
                                        isObject={true}
                                        displayValue="title"
                                        onKeyPressFn={function noRefCheck(){}}
                                        onRemove={(item)=>toggleItem(item, "selectedSources")}
                                        onSelect={(item)=>toggleItem(item, "selectedSources")}
                                        options={transformedSources}
                                    />
                                </div>
                            </div> 
            
                        </div> 
            
                    </> : <></>
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