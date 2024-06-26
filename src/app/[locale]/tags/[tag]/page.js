export const metadata = {
    title: 'تگ ها',
}

import React, { use } from "react";
import Header from "../../homeComponents/Header";
import TagAside from "../TagAside";
import Footer from "../../homeComponents/Footer";
import Error from "../../annotations/Error";
import Questions from "../Questions";
import PaginationCount from "../../categoriesComponents/PaginationCount";
import { getTagQuestions } from "../../../../dataService/tagData";
import styles from "../../../../../public/styles/categories.module.scss";

async function getData(tagName, page){
    try{
        // console.log(tagName)
        const response = await getTagQuestions({ 
            tags : [tagName],
            per_page: 12,
            page: page ? page : 1,
            order_by: "*",
            order_type: "*",
            sources: [
                "*"
            ],
            marjas: [
                "*"
            ]
        });
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}

function Tag({ params, searchParams }) {
    // console.log(searchParams)
    const { page } = searchParams;
    const decoded = decodeURIComponent(params.tag);
    const data = use(getData(decoded.replaceAll("-", " "), page ) );

    return (
        <>
            <div className="mainContentContainer">
                <Header lang={params.locale}/>
                <div className={styles["tag-mainContent"]}>
                    <TagAside totalCount={data[0].meta.total_count} tag={decoded.replaceAll("-", " ")}/>
                    {
                        data? 
                            (
                                data[0].questions ? 
                                <div>
                                    <Questions data={data[0].questions}/>
                                    <PaginationCount oneQuery={true} path={`/tags/${decoded}`} pageItems={12} currentPage={page ? page : 1 } totalCount={data[0].meta.total_count} />
                                </div>
                                : <Error text={"محتوایی برای تگ مورد نظر شما یافت نشد"}/>
                            )
                            : <Error/>
                    }
                   
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Tag; 