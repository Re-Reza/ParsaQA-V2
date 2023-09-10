"use client";
import React, { useState } from "react";
import styles from "../../../../public/styles/categories.module.scss";

function TopPartFilters(props) {

    const [state, setState] = useState({
        activeFilter: 0
    });

    const filters = ["جدیدترین", "مرتبط ترین", "پربازدیدترین", "پرمخاطب ترین", "ماه گذشته"]

    return (
        <div className="txt-muted justify-content-between overflow-auto align-items-center txt-c-normal d-flex mb-4">
            <div className="me-3 d-flex">
                {
                    props.isCategory == true ? <div className="txt-c-large text-dark">دسته بندی ها</div> :
                        <> <div className="txt-c-large text-dark">نتایج</div>
                            <div className="fw-500 ms-2 txt-gray">2500 نتیجه</div> </>
                }
            </div>
            <div className="d-flex justify-content-between align-items-center" style={{ width: "79%" }}>
                <div className="d-flex">
                    {
                        filters.map((item, index) => <div role="button" className={index == state.activeFilter ? "txt-darkBlue me-5" : "me-5"} onClick={() => setState({ ...state, activeFilter: index })} key={index}>{item}</div>)
                    }
                </div>
                <button className={styles["newQuestionBtn"]}>پرسش جدید</button>
            </div>
        </div>
    )
}

export default TopPartFilters;