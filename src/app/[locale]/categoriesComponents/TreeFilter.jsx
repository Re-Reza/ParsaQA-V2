"use client";

import React, { useState } from "react";
import Link from "next/link";
import { categoryList } from "./treeList";
import { AiTwotoneFolder, AiTwotoneFolderOpen, AiOutlineFile } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { VscCircle } from "react-icons/vsc";
import { IoIosArrowBack } from "react-icons/io";

function TreeFilter(props) {

    const [state, setState] = useState({
        show: false
    });

    function toggleShow(item, level) {
        setState({
            ...state,
            ["item" + item + "level" + level]: state["item" + item + "level" + level] == true ? false : true
        })
    }

    let showTree = false;
    if (props.isSearch && state.show)
        showTree = true;
    else if (props.isSearch != true)
        showTree = true

    return (
        <div style={props.isSearch ? { borderBottom: "1.5px solid #ACACAC" } : {}} className="mt-4">
            {
                props.isSearch ? <div className="txt-darkBlue mb-4" onClick={() => setState({ ...state, show: !state.show })} role="button">
                    <span className="txt-c-normal">درخت موضوعی</span> <span className={"txt-c-large ms-2 transition-3 " + (state.show ? "rotate" : "")}> <IoIosArrowBack /> </span>
                </div>
                    : <></>
            }

            {
                showTree ?
                    <ul>
                        {
                            categoryList.map((l0item, l0Index) => <li className="mb-3 txt-c-normal fw-500" key={l0Index}>
                                {
                                    l0item.level1List ?
                                        <div className="mb-3 d-flex align-items-center" onClick={() => toggleShow(l0Index, 1)} role="button"> {state["item" + l0Index + "level" + 1] == true ? <span className="me-2 "><MdOutlineKeyboardArrowDown /><AiTwotoneFolder /></span> : <span className="me-2 "><MdKeyboardArrowLeft /><AiTwotoneFolder /></span>}<div className="lh-base text-center">{l0item.title}</div> </div>
                                        :
                                        <Link href={`${'/categories?q=' + l0Index}`}><span className="me-2"> <VscCircle /></span>{l0item.title}</Link>
                                }
                                {
                                    l0item.level1List && state["item" + l0Index + "level" + 1] == true ? <ul>
                                        {
                                            l0item.level1List.map((l1item, l1Index) => <li className="txt-muted mb-3" key={l1Index}>
                                                {
                                                    l1item.level2List ?
                                                        <div className={"mb-3 d-flex align-items-center hover-lightBlue " + (state["item" + l1Index + "" + l0Index + "level" + 2] ? "border-lightBlue" : "")} onClick={() => toggleShow(l1Index + "" + l0Index, 2)} role="button">  <span className="me-2 "><AiOutlineFile /></span> <div className="lh-base text-center">{l1item.title}</div> </div>
                                                        :
                                                        <Link href={`${'/categories?q=' + l0Index + "-" + l1Index}`}><span className="me-2"> <VscCircle /></span>{l1item.title}</Link>
                                                }
                                                {
                                                    l1item.level2List && state["item" + l1Index + "" + l0Index + "level" + 2] == true ? <ul>
                                                        {
                                                            l1item.level2List.map((l2item, l2Index) => <li key={l2Index} className="txt-muted mb-3 fw-400 fs-c-1">
                                                                {
                                                                    l2item.level3List ?
                                                                        <div className={"mb-3 d-flex align-items-center hover-lightBlue " + (state["item" + l2Index + "" + l1Index + l0Index + "level" + 3] ? "border-lightBlue" : "")} style={{ marginRight: "1.8em" }} onClick={() => toggleShow(l2Index + "" + l1Index + l0Index, 3)} role="button"> <span className="me-2 "><AiOutlineFile /></span> <div className="lh-base text-center">{l2item.title}</div> </div>
                                                                        :
                                                                        <Link style={{ marginRight: "1.8em" }} href={`${'/categories?q=' + l0Index + "-" + l1Index + "-" + l2Index}`}><span className="me-2"> <VscCircle /></span>{l2item.title}</Link>
                                                                }
                                                                {
                                                                    l2item.level3List && state["item" + l2Index + "" + l1Index + l0Index + "level" + 3] == true ? <ul>
                                                                        {
                                                                            l2item.level3List.map((l3item, l3Index) => <li key={l3Index} className="txt-muted mb-3">
                                                                                {
                                                                                    l3item.level4List ?
                                                                                        <div style={{ marginRight: "2.7em" }} className={"mb-3 d-flex align-items-center hover-lightBlue " + (state["item" + l3Index + "level" + 4] ? "border-lightBlue" : "")} onClick={() => toggleShow(l3Index, 4)} role="button"> <span className="me-2 "><AiOutlineFile /></span> <div className="lh-base text-center">{l3item.title}</div> </div>
                                                                                        :
                                                                                        <Link style={{ marginRight: "2.7em" }} href={`${'/categories?q=' + l0Index + "-" + l1Index + "-" + l2Index + "-" + l3Index}`}><span className="me-2"> <VscCircle /></span>{l3item.title}</Link>
                                                                                }
                                                                                {
                                                                                    l3item.level4List && state["item" + l3Index + "level" + 4] == true ? <ul>
                                                                                        {
                                                                                            l3item.level4List.map((l4item, l4Index) => <li key={l4Index} className="txt-muted mb-3">
                                                                                                {
                                                                                                    l4item.level5List ?
                                                                                                        <div className={"mb-3 d-flex align-items-center hover-lightBlue " + (state["item" + l4Index + "level" + 5] ? "border-lightBlue" : "")} style={{ marginRight: "3.6em" }} onClick={() => toggleShow(l4Index, 5)} role="button">  <span className="me-2 "><AiOutlineFile /></span> <div className="lh-base text-center">{l4item.title}</div> </div>
                                                                                                        :
                                                                                                        <Link style={{ marginRight: "3.6em" }} href={`${'/categories?q=' + l0Index + "-" + l1Index + "-" + l2Index + "-" + l3Index + "-" + l4Index}`}><span className="me-2"> <VscCircle /></span>{l4item.title}</Link>
                                                                                                }
                                                                                                {
                                                                                                    l4item.level5List && state["item" + l4Index + "level" + 5] == true ? <ul>
                                                                                                        {
                                                                                                            l4item.level5List.map((l5item, l5Index) => <li key={l5Index} className="txt-muted mb-3">
                                                                                                                {
                                                                                                                    l5item.level6List ?
                                                                                                                        <div style={{ marginRight: "4.6em" }} className={"mb-3 d-flex align-items-center hover-lightBlue " + (state["item" + l5Index + "level" + 6] ? "border-lightBlue" : "")} onClick={() => toggleShow(l5Index, 6)} role="button"> <span className="me-2 "><AiOutlineFile /></span> <div className="lh-base text-center">{l5item.title}</div> </div>
                                                                                                                        :
                                                                                                                        <Link style={{ marginRight: "4.6em" }} href={`${'/categories?q=' + l0Index + "-" + l1Index + "-" + l2Index + "-" + l3Index + "-" + l4Index + "-" + l5Index}`}><span className="me-2"> <VscCircle /></span>{l5item.title}</Link>
                                                                                                                }
                                                                                                                {
                                                                                                                    l5item.level6List && state["item" + l5Index + "level" + 6] == true ? <ul>
                                                                                                                        {
                                                                                                                            l5item.level6List.map((l6item, l6Index) => <li key={l6Index} className="txt-muted mb-3">
                                                                                                                                <Link style={{ marginRight: "5.8em" }} href={`${'/categories?q=' + l0Index + "-" + l1Index + "-" + l2Index + "-" + l3Index + "-" + l4Index + "-" + l5Index + "-" + l6Index}`}><span className="me-2"> <VscCircle /></span>{l6item.title}</Link>
                                                                                                                            </li>)
                                                                                                                        }
                                                                                                                    </ul> : <></>
                                                                                                                }
                                                                                                            </li>)
                                                                                                        }
                                                                                                    </ul> : <></>

                                                                                                }
                                                                                            </li>)
                                                                                        }
                                                                                    </ul> : <></>
                                                                                }
                                                                            </li>)
                                                                        }
                                                                    </ul> : <></>
                                                                }
                                                            </li>)
                                                        }
                                                    </ul> : <></>
                                                }
                                            </li>)
                                        }
                                    </ul> : <></>
                                }
                            </li>)
                        }
                    </ul> : <></>
            }

        </div>
    )
}

export default TreeFilter