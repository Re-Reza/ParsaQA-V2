"use client";

import React, { useState } from "react";
// import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from "../../../../public/styles/headerFooter.module.scss";

import { categoryList } from "../categoriesComponents/treeList";

function HeaderCategory() {

    const [state, setState] = useState({
        activeIndex: null,
        level1Active: null,
        level2Active: null,
        level3Active: null,
        level4Active: null,
        level5Active: null
    });

    function setIndex(key, value) {
        setState({
            ...state,
            [key]: value
        });
    }

    return (
        <ul className={styles["categorySubContainer"]}>
            <div>
                {
                    categoryList.map((item, index) => <li onClick={() => setIndex("activeIndex", index)} style={index == 7 ? { marginBottom: 0 } : { marginBottom: "2em" }} className={styles["categoryItem"] + " " + (state.activeIndex == index ? styles["categoryItem-active"] : "")} key={index}>

                        <span>{item.title}</span>

                        {item.level1List ? <span className="ms-2 txt-c-large"><MdKeyboardArrowLeft /></span> : <></>}

                    </li>)
                }
            </div>

            {

                state.activeIndex != null && categoryList[state.activeIndex].level1List != null ?
                    <ul className={styles["subCategoryList"]}>
                        {categoryList[state.activeIndex].level1List.map((item, l1Index) => <li role="button" className={styles["subActive"] + " text-muted " + (state.level1Active == l1Index ? styles["subActiveLink"] : "")} onClick={() => setIndex("level1Active", l1Index)} key={l1Index}>
                            <span> {item.title}</span>
                            <span className="ms-2 txt-c-large">{item.level2List ? <MdKeyboardArrowLeft /> : <></>}</span>
                        </li>)}
                    </ul>

                    :
                    <></>
            }

            {

                state.level1Active != null && categoryList[state.activeIndex].level1List[state.level1Active].level2List != null ?
                    <ul className={styles["subCategoryList"]}>
                        {categoryList[state.activeIndex].level1List[state.level1Active].level2List.map((item, index) => <li role="button" className={styles["subActive"] + " text-muted " + (state.level2Active == index ? styles["subActiveLink"] : "")} onClick={() => setIndex("level2Active", index)} key={index}>
                            <span> {item.title}</span>
                            <span className="ms-2 txt-c-large">{item.level3List ? <MdKeyboardArrowLeft /> : <></>}</span>
                        </li>)}
                    </ul>

                    :
                    <></>
            }

            {

                state.level2Active != null && categoryList[state.activeIndex].level1List[state.level1Active].level2List[state.level2Active].level3List != null ?
                    <ul className={styles["subCategoryList"]}>
                        {categoryList[state.activeIndex].level1List[state.level1Active].level2List[state.level2Active].level3List.map((item, index) => <li role="button" className={styles["subActive"] + " text-muted " + (state.level3Active == index ? styles["subActiveLink"] : "")} onClick={() => setIndex("level3Active", index)} key={index}>
                            <span> {item.title}</span>
                            <span className="ms-2 txt-c-large">{item.level4List ? <MdKeyboardArrowLeft /> : <></>}</span>
                        </li>)}
                    </ul>

                    :
                    <></>
            }

            {

                state.level3Active != null && categoryList[state.activeIndex].level1List[state.level1Active].level2List[state.level2Active].level3List[state.level3Active].level4List != null ?
                    <ul className={styles["subCategoryList"]}>
                        {categoryList[state.activeIndex].level1List[state.level1Active].level2List[state.level2Active].level3List[state.level3Active].level4List.map((item, index) => <li role="button" className={styles["subActive"] + " text-muted " + (state.level4Active == index ? styles["subActiveLink"] : "")} onClick={() => setIndex("level4Active", index)} key={index}>
                            <span> {item.title}</span>
                            <span className="ms-2 txt-c-large">{item.level5List ? <MdKeyboardArrowLeft /> : <></>}</span>
                        </li>)}
                    </ul>

                    :
                    <></>
            }


            {

                state.level4Active != null && categoryList[state.activeIndex].level1List[state.level1Active].level2List[state.level2Active].level3List[state.level3Active].level4List[state.level4Active].level5List != null ?
                    <ul className={styles["subCategoryList"]}>
                        {categoryList[state.activeIndex].level1List[state.level1Active].level2List[state.level2Active].level3List[state.level3Active].level4List[state.level4Active].level5List.map((item, index) => <li role="button" className={styles["subActive"] + " text-muted " + (state.level5Active == index ? styles["subActiveLink"] : "")} onClick={() => setIndex("level5Active", index)} key={index}>
                            <span> {item.title}</span>
                            <span className="ms-2 txt-c-large">{item.level6List ? <MdKeyboardArrowLeft /> : <></>}</span>
                        </li>)}
                    </ul>

                    :
                    <></>
            }

            {

                state.level5Active != null && categoryList[state.activeIndex].level1List[state.level1Active].level2List[state.level2Active].level3List[state.level3Active].level4List[state.level4Active].level5List[state.level5Active].level6List != null ?
                    <ul className={styles["subCategoryList"]}>
                        {categoryList[state.activeIndex].level1List[state.level1Active].level2List[state.level2Active].level3List[state.level3Active].level4List[state.level4Active].level5List[state.level5Active].level6List.map((item, index) => <li role="button" className={styles["subActive"] + " text-muted "} key={index}>
                            <span> {item.title}</span>
                        </li>)}
                    </ul>

                    :
                    <></>
            }

        </ul>
    )
}

export default HeaderCategory;