"use client"

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";
import { BiMicrophone } from "react-icons/bi"; 
import { BsSearch } from "react-icons/bs";
import { MdSavedSearch } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import VoiceRecorder from "./VoiceRecorder";
import styles from "../../../public/styles/headerFooter.module.scss";

function HeaderSearch(props) {

    const [state, setState] = useState({
        activeButton: -1,
        showFilters : false,
        showRecommands : false
    });

    const searchInput = useRef();

    const buttons = [
        { title: "حدیث", id: 0 },
        { title: "احکام", id: 1 },
        { title: "قرآن کریم", id: 2 },
        { title: "تاریخ و سیره", id: 3 },
        { title: "اخلاق و تربیت اسلامی", id: 4 },
        { title: "اجتماعی سیاسی", id: 5 },
    ];

    const tags = ["نماز", "حجاب", "قرآن"]

    function setNewButton(id) {
        setState({
            ...state,
            activeButton: id == state.activeButton ? -1 : id
        });
    }

    const recommands = [
        "احکام نماز", "احکام روزه", "احکام خمس"
    ];

    const { push } = useRouter();
    function searchRequest(){
        console.log(searchInput.current.value)
        // push({ pathname : `/search}`, query : { q : searchInput.current.value} });
        push(`/search?q=${searchInput.current.value}`);
    }

    return (
        <div className="mt-4 d-flex flex-column align-items-center">

            <div className={styles["header-searchContainer"]}>
                <div className="d-flex w-100 flex-column flex-md-row align-items-center">
                    <button onClick={ ()=> { setState({...state, showFilters : !state.showFilters})}} title="نمایش فیلتر ها" className="text-white txt-c-large txt-large me-4">{ state.showFilters ? <IoIosArrowUp/> : <IoIosArrowDown/>}</button>
                    <div className="position-relative" style={{minWidth: "79%"}}>
                        <div className={styles["header-inputSearchContainer"]+" w-100 mb-md-0 mb-4 d-flex justify-content-between align-items-center"}>
                            <div className="w-100">
                                <span className="me-2 txt-c-large" role="button"><BsSearch /></span>
                                <input ref={searchInput} onBlur={ ()=> setState({...state, showRecommands : false}) } onFocus={ ()=> setState({...state, showRecommands : true}) } style={{ width : "90%"}} className={styles["input"]} placeholder="جستجوی سوال با کلیدواژه" type="text" />
                            </div>
                            <button className={styles["filterButton"] + " ms-2 txt-c-large txt-darkBlue txt-c-nomal"}><BiMicrophone/></button>
                        </div>

                        <ul className={styles["recommandation"]+ ( state.showRecommands ? " "+styles["showRecommand"] : "" ) }>
                        {
                            recommands.map((item, index) => <li className="txt-muted txt-c-medium mt-4 d-flex justify-content-between" key={index}>
                                <div>{item}</div>
                                <div role="button" className="fw-c-500"><AiOutlineClose/></div>
                            </li> )
                        }
                        </ul>
                        
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
                                        <input className="form-check-input" role="switch" type="checkbox" id="userSwitch" />
                                        <label className="form-check-label" htmlFor="userSwitch">
                                            از بین کاربران شبکه پارسا
                                        </label>
                                    </div>
                                </div>
                                :
                                <button onClick={searchRequest} className={styles["advancedSearchBtn"] + " ms-3"}>جستجوی پیشرفته <span className="ms-2 txt-c-large txt-large"><MdSavedSearch/></span></button>
                        }
                    </div>
                </div>
                {/* <VoiceRecorder/> */}
                {
                    state.showFilters ? 
                        <div className={styles["advancedFilterContainer"]}>
                        
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="me-4 txt-gray3 fw-500">
                                <label>عبارت شامل</label>
                                <br/>
                                <span>(بین عبارت ها "و" بر قرار است)</span>
                            </div>
                            <ul className={styles["filterInput"]+" d-flex"}>
                                {
                                tags.map((item, index) => <li className={styles["tag"]} key={index}>
                                    <span className="me-2" role="button"><AiOutlineClose /></span>
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
                    </div> : <></>
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