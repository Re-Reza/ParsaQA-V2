import React from "react";
import TreeFilter from "./TreeFilter";
import styles from "../../../public/styles/categories.module.scss";

function CategoryAside() {

    return (
        <div>

            <aside className={styles["aside"]}>
                <div className="txt-c-large  txt-darkBlue mb-4">درخت موضوعی</div>

                <TreeFilter />

            </aside>
        </div>
    )
}

export default CategoryAside;