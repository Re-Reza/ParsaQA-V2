import React from "react";

import Aside from "../categoriesComponents/Aside";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../../public/styles/categories.module.scss";

function TagAside(){

    return(
        <aside>
        
            <div className="d-flex mb-3 align-items-center">
                <h3 className="txt-gray3 txt-c-large txt-large2 me-3">تگ</h3>
                <button className={styles["tagBtn"]}>
                    <span className="me-2 txt-muted"><AiOutlineClose/></span>
                    خود برتر بینی
                </button>
                <div className="txt-gray ms-3 fw-500">2500 نتیجه</div>
            </div>

            <Aside />
        </aside>
    )
}

export default TagAside;