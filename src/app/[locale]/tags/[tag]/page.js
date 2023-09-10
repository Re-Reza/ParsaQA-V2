import React, { use } from "react";
import { useParams,  usePathname } from "next/navigation";
// import { useRouter } from "next/router";
// import { use}
import Header from "../../homeComponents/Header";
import TagAside from "../TagAside";
import Footer from "../../homeComponents/Footer";
import Error from "../../error/Error";
import Questions from "../Questions";
import { getTagQuestions } from "../../../../dataService/tagData";
import styles from "../../../../../public/styles/categories.module.scss";

async function getData(tagName){
    try{
        console.log(tagName)
        const response = await getTagQuestions({ 
            tags : [tagName]
        });
        // console.log(response)
        return response.data;
    }
    catch(err){
        console.log(err);
        return null;
    }
}

function Tag({ params }) {

    const decoded = decodeURIComponent(params.tag);
    const data = use(getData(decoded.replaceAll("-", " ")));

    return (
        <>
            <div className="mainContentContainer">
                <Header />
                <div className={styles["tag-mainContent"]}>
                    <TagAside />
                    {
                        data? 
                            <Questions data={data}/>
                            : <Error />
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Tag; 