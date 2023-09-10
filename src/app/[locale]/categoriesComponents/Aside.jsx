import React from "react";
import FilterOption from "./FilterOption";
import TreeFilter from "./TreeFilter";
import styles from "../../../../public/styles/categories.module.scss";

function Aside() {

    return (
        <div>
            <aside className={styles["aside"]}>
                <div className="d-flex justify-content-center mb-5"> <button className={styles["filterBtn"]}>اعمال فیلتر</button> </div>

                <FilterOption title="زبان جستجو" type="language" options={["زبان فارسی", "زبان عربی"]} />
                <TreeFilter isSearch={true} />
                <FilterOption title="مرجع جستجو" type="language" options={["پایگاه آیت الله خامنه ای", "پایگاه آیت الله بهجت", "پایگاه آیت الله مکارم شیرازی", "پایگاه آیت الله سیستانی", "پایگاه آیت الله خویی", "پایگاه آیت الله هادوی تهرانی"]} />
                <FilterOption last={true} title="منبع جستجو" type="language" options={["راسخون", "حوزه دات نت", "اسلام کوئست", "پرسمان دانشگاهیان", "حدیث نت", "ویکی نور", "قاموس نور"]} />

            </aside>
        </div>
    )
}

export default Aside;