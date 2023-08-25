"use client";

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { IoIosArrowBack } from "react-icons/io";

function FilterOption(props) {

    const [state, setState] = useState({
        showFilter: false,
    });

    return (
        <div style={props.last ? { } : {borderBottom : "1.5px solid #ACACAC"}} className="pb-3 mt-4">

            <div className="txt-darkBlue mb-2" onClick={() => setState({ ...state, showFilter: !state.showFilter })} role="button">
                <span className="txt-c-normal">{props.title}</span> <span className={ "txt-c-large ms-2 transition-3 "+ (state.showFilter ? "rotate" : "")}> <IoIosArrowBack /> </span>
            </div>

            {
                state.showFilter ?
                    <ul className="mt-4">
                        {
                            props.options.map((item, index) => <li className="txt-muted mb-2" key={index}>
                                <Form.Check className="d-flex align-items-center" role="button" type="checkbox" label={item} id={props.type+index}/>
                            </li>)
                        }
                    </ul> : <></>
            }

        </div>
    )
}

export default FilterOption;