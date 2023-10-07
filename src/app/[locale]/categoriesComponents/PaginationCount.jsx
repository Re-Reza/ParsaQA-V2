"use client";

import { useRouter, usePathname } from "next/navigation";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import styles from "../../../../public/styles/categories.module.scss";

function PaginationCount({ totalCount, currentPage, pageItems, path, oneQuery }) {
    const parsedCurrentPage = parseInt(currentPage);
    const totalPage = Math.ceil( parseInt(totalCount) / pageItems );
    const prev = parsedCurrentPage - 3 <= 0 ? 1 : parsedCurrentPage - 3;
    let next = totalPage - parsedCurrentPage <= 5 ? totalPage : parsedCurrentPage + 5;

    const { push } = useRouter();

    function navigateTopage(page){
        push(path+`${(oneQuery ? "?" : "&")}page=${page}`);
    }
    let pages= [];
    for ( let i=prev; i<=next; i++) { 
        pages.push(<li onClick={ ()=>navigateTopage(i) } key={i} className={styles["paginationItem"]+" "+( i == parsedCurrentPage ? styles["paginationItemActive"] : "")}>
            {i}
        </li>)
    }
    if( totalPage - parsedCurrentPage > 5 ){
        pages.push(
            <>
                <li key={next+=1} className={styles["paginationItem"]}>
                    ...
                </li>  
                <li key={next+=2} onClick={ ()=>navigateTopage(totalPage)} className={styles["paginationItem"]+" "+( totalPage == parsedCurrentPage ? styles["paginationItemActive"] : "")}>
                    {totalPage}
                </li> 
            </>
            
        )
    }

    return (
        <div className="mt-4">
            <ul className={styles["paginationList"]}>
                {
                    totalPage > 1 && parsedCurrentPage != 1 ? 
                    <li key={"prevPage"} onClick={ ()=>navigateTopage( parsedCurrentPage-1 )} className={ styles["paginationItem"]+ " txt-c-large" }>
                        <RiArrowLeftSLine />
                    </li> 
                    : <></>
                }
                {pages}
                {
                    totalPage > 1 && parsedCurrentPage != totalPage ?
                    <li key={"nextPage"} onClick={ ()=>navigateTopage( parsedCurrentPage+1 )} className={ styles["paginationItem"]+ " txt-c-large" }>
                        <RiArrowRightSLine />
                    </li> 
                    : <></>
                }
            </ul>
        </div>
    )
}

export default PaginationCount;