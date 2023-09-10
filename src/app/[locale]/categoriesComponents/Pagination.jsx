"use client"
import React from "react";
import Link from "next/link";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import styles from "../../../../public/styles/categories.module.scss";

function Pagination(props){

    const { meta , links, query } = props.data;
   
    function extractPage(url){
        return url ? url.split("?")[1] : "";
    }

    return (
        <div className="mt-4">
            <ul className={styles["paginationList"]}>
                {
                    links.prev ? 
                    <li  key={"linkPrv"} className={styles["paginationItem"]+ " txt-c-large" }>
                        <Link href={`/search?q=${query}&${extractPage(links.prev)}`}><RiArrowLeftSLine/></Link>
                    </li>
                    :<></>
                }
                {
                    meta.links.map(( item, index ) => isNaN(item.label) && item.label != "..." ? <></> :
                    <li className={styles["paginationItem"] + " "+( item.active == true ? styles["paginationItemActive"] : "")} key={index}>
                        <Link href={`/search?q=${query}&${extractPage(item.url)}`}>{item.label}</Link>
                    </li> )
                }
                {
                    links.next ? 
                       <li key={"linkNext"} className={styles["paginationItem"]+ " txt-c-large" }>
                       <Link href={`/search?q=${query}&${extractPage(links.next)}`}><RiArrowRightSLine/></Link>
                   </li>
                   :<></>
                }
            </ul>
        </div>
    )
}

 export default Pagination;