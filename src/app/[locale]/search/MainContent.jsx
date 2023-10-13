"use client"

import React, { useState, useEffect } from "react";
import { voiceSearch } from "../../../dataService/searchData"
import QuestionItem from "../categoriesComponents/QuestionItem2";
import Error from "../error/Error";

function MainContent(props){

    const [ state, setState ] = useState({
        data : []
    });

    const audioFile = new File([props.blob], "out.webm", {
        type: "audio/webm"
    });

    useEffect(()=> {
        voiceSearch({
            voice : audioFile,
            language : props.lang
        }).then( response => {
            console.log(response);
            setState({
                ...state,
                data : response.data[0].users
            });

        }).catch( err => {
            console.log(err);
            setState({
                ...state,
                data : null
            })
        });
    }, [props.blob])

    return(
        <section>

            <article className="d-flex justify-content-between mb-4 align-items-center">

                {/* <ul className={styles["bread-container"]}>
                    {
                        titles.map((item, index) => <li className={"fw-500 " + (index == titles.length - 1 ? " txt-gray3" : "txt-lightBlue")} key={index}>{item}
                            {index == titles.length - 1 ? <></> : <span className="ms-2 me-2 txt-gray3"><MdKeyboardArrowLeft /></span>}
                        </li>)
                    }
                </ul> */}

            </article>

            {
                state.data ? 
                <ul>
                {
                    state.data.map((item, index) => <QuestionItem isOld={true} isSearch={true} key={index} item={item} />)
                }
                </ul> :
                <Error />  
            }
        </section>
    )
}

export default MainContent;