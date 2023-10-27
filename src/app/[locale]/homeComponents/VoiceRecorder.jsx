"use client"
import React, { useRef, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { BiMicrophone } from "react-icons/bi"; 
import { BsRecord2 } from "react-icons/bs";
import { useTranslations } from "next-intl";
// import { voiceSearch } from "../../../dataService/searchData"
import { convertVoiceToText } from "../../../dataService/searchData";
import Loading1 from "../annotations/Loading1";
import styles from "../../../../public/styles/headerFooter.module.scss";

export default function VoiceRecorder(props){

    const {
        startRecording,
        stopRecording, 
        isRecording, 
        recordingBlob 
    } = useAudioRecorder();

    const [ state, setState ] = useState(false); 

    const t = useTranslations("header");

    const modeRef = useRef(null);
    const params = useParams();
    // const { push } = useRouter();

    useEffect(() => {
        if (!recordingBlob) return;

        setState(true);
        const blobObj = {
            size : recordingBlob.size,
            type  : recordingBlob.type
        }
        const audioFile = new File([blobObj], "out.webm", {
            type: "audio/webm"
        });
        console.log(audioFile);
        convertVoiceToText({
            voice : audioFile,
            language : params.locale
        }).then( response => {
            props.fillInput( response.data.text, false)
            setState(false);
        }).catch( err => setState(false));

        // const fileObj = {
        //     lastModified : audioFile.lastModified,
        //     lastModifiedDate : audioFile.lastModifiedDate,
        //     name : audioFile.name,
        //     size : audioFile.size,
        //     type : audioFile.type,
        //     webkitRelativePath : audioFile.webkitRelativePath
        // }
    
        // push(`/search/audioSearch?audioF=${ JSON.stringify(blobObj) }`);
   
    }, [recordingBlob]);
    
    let timer = null;
    function callRecorder(){
        if( isRecording ) {
            timer = setTimeout(() => {
                modeRef.current.classList.remove(styles["recordMode-show"])
            }, 200)
            stopRecording();
        }
        else {
            startRecording();
            modeRef.current.classList.add(styles["recordMode-show"]);
        }
    }
    
    return (
        <div>
            <button onClick={callRecorder} className={styles["filterButton"] + " position-relative ms-2 txt-c-large txt-darkBlue txt-c-nomal"}>
                { isRecording ?<div>
                    <div style={ params.locale == "en" ? {top : "-146%", right: "-110%" } : {top : "-155%", right: "-75%" } } className={styles["stopRecording"]}>{t("stopRecording")}</div>
                    <div className={styles["recording"]}> <BsRecord2/> </div>
                </div> : <BiMicrophone/> } 
            </button> 
            {
                state ? <Loading1 styles={params.locale == "en" ? { right : "13%" } : { left : "3%" } }/>: <></>
            }
            <div ref={modeRef} className={styles["recordMode"]}>
                { isRecording ? t("recording") : t("recording") } 
            </div>

        </div>
    )
}