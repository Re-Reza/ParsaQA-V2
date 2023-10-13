"use client"

import React, { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAdd} from "react-icons/io";
import { useTranslations } from "next-intl";
// import Form from "react-bootstrap/Form";
import styles from "../../../../public/styles/headerFooter.module.scss";

function AdvancedSearch({ tags, sources, marjas, setAdvandedSeacrhData, lang }){
console.log(sources);
    const [ state, setState ] = useState({
        allWords: [],
        nonWords : [],
        anyWords : [],
        selectedTags : [],
        selectedMarjas : [],
        selectedSources : [],
        selectedLangs : [],
        focusedInput : null,
    });

    const t = useTranslations("header");

    function toggleItem(list, key){
        const newData = list.map(item => item.title );
        setState({
            ...state,
            [key] : newData
        });
    }

    const transformedSources = sources.map(item => ({ title : item.translates[lang] }) );2

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


    const { allWords, nonWords, selectedTags, selectedMarjas, selectedSources, selectedLangs ,anyWords, focusedInput } = state;
 
    function apply(){
        setAdvandedSeacrhData(allWords, nonWords, anyWords, selectedLangs, selectedTags, selectedSources, selectedMarjas );
    }


    return(
        <>
            <div className={styles["advancedFilterContainer"]}>
                
                <div className="d-flex align-items-center justify-content-between">
                    <div className="me-4 txt-gray3 fw-500">
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
    
                <div className="d-flex align-items-center justify-content-between">
                    <div className="me-4 txt-gray3 fw-500">
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
                
                <div className="d-flex align-items-center justify-content-between">
                    <div className="me-4 txt-gray3 fw-500">
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
    
                <div className="d-flex align-items-center justify-content-between">
                    <div className="me-4 txt-gray3 fw-500">
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
                
                <div className="d-flex align-items-center justify-content-between">
                    <div className="me-4 txt-gray3 fw-500">
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
    
                <div className="d-flex align-items-center justify-content-between">
                    <div className="me-4 txt-gray3 fw-500">
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
    
                <div className="d-flex align-items-center justify-content-between">
                    <div className="me-4 txt-gray3 fw-500">
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

                <button onClick={apply} style={{width : "max-content", justifySelf : "self-end"}} className={styles["installBtn"] + " m-0 ps-4 pe-4"}>{t("applyFilter")}</button>
            </div> 

        </>
   
    )
}

export default AdvancedSearch;


{/* <div className={styles["advancedFilterContainer"]}>
                        
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>عبارت شامل</label>
                                <br/>
                                <span>(بین عبارت ها "و" بر قرار است)</span>
                            </div>
                            <ul className={styles["filterInput"]+" d-flex"}>
                                {
                                tags.map((item, index) => <li className={styles["tag"]} key={index}>
                                    <span className="me-2" role="button" onClick={()=>removeItem(item)}><AiOutlineClose /></span>
                                    <span>{item}</span>
                                </li>)
                                }
                            </ul>
                        </div>
                
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>در بین زبان ها</label>
                            </div>
                            <Form.Select >
                                <option>زبان فارسی</option>
                            </Form.Select>
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>یکی از این عبارات</label>
                                <br/>
                                <span>(بین عبارت ها "یا" بر قرار است)</span>
                            </div>
                            <div>
                                <input className={styles["filterInput"]} type="text" placeholder="کلیدواژه"/>
                            </div>
                        </div>
                
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>در بین  پایگاه ها</label>
                            </div>
                            <Form.Select >
                                <option>پرسمان دانشجویی</option>
                            </Form.Select>
                        </div>
                        
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>دقیقا این عبارت</label>
                            </div>
                            <div>
                                <input className={styles["filterInput"]} type="text" placeholder="کلیدواژه"/>
                            </div>
                        </div>
                
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>آخرین آپدیت</label>
                            </div>
                            <Form.Select>
                                <option>یکماه قبل</option>
                            </Form.Select>
                        </div>                    
                
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>هیچکدام از این عبارت</label>
                            </div>
                            <input className={styles["filterInput"]} type="text" placeholder="کلید واژه"/>
                        </div>
                
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>وضعیت سوال</label>
                            </div>
                            <Form.Select >
                                <option>بدون پاسخ</option>
                            </Form.Select>
                        </div>
                    </div>  */}