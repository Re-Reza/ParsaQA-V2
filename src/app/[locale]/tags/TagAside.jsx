import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import FilterOption from "../categoriesComponents/FilterOption";
import TreeFilter from "../categoriesComponents/TreeFilter";
import styles from "../../../../public/styles/categories.module.scss";

function TagAside(){

    const relatedTagds = [
        { title : "غرور کاذب", count : 120 },
        { title : "غرور کاذب", count : 110 },
        { title : "غرور کاذب", count : 120 },
        { title : "غرور کاذب", count : 120 },
        { title : "غرور کاذب", count : 110 },
        { title : "غرور کاذب", count : 110 },
        { title : "غرور کاذب", count : 120 },
        { title : "غرور کاذب", count : 120 }
    ]

    return(
        <aside>
        
            <div className="d-flex mb-4 align-items-center">
                <h3 className="txt-gray3 txt-c-large txt-large2 me-3">تگ</h3>
                <button className={styles["tagBtn"]}>
                    <span className="me-2 txt-muted"><AiOutlineClose/></span>
                    خود برتر بینی
                </button>
                <div className="txt-gray ms-3 fw-500">2500 نتیجه</div>
            </div>

            <div className={styles["aside"]+" mb-4"}>
                <ul>
                    <h6 className='txt-gray3 mb-3 txt-c-large'>تگ های مرتبط</h6>
                    {
                        relatedTagds.map((item, index) => <li className='d-flex justify-content-between mt-3' key={index}>
                            <div className='txt-gray3'>{item.title}</div>
                            <div className='txt-muted'>{item.count} سوال</div>
                        </li>)
                    }
                </ul>
            </div>

            <div className={styles["aside"]}>
                <div className="d-flex justify-content-center mb-5"> <button className={styles["filterBtn"]}>اعمال فیلتر</button> </div>
                <FilterOption title="زبان جستجو" type="language" options={["زبان فارسی", "زبان عربی"]} />
                <TreeFilter isSearch={true} />
                <FilterOption title="مرجع جستجو" type="language" options={["پایگاه آیت الله خامنه ای", "پایگاه آیت الله بهجت", "پایگاه آیت الله مکارم شیرازی", "پایگاه آیت الله سیستانی", "پایگاه آیت الله خویی", "پایگاه آیت الله هادوی تهرانی"]} />
                <FilterOption last={true} title="منبع جستجو" type="language" options={["راسخون", "حوزه دات نت", "اسلام کوئست", "پرسمان دانشگاهیان", "حدیث نت", "ویکی نور", "قاموس نور"]} />
            </div>
    
        </aside>
    )
}

export default TagAside;