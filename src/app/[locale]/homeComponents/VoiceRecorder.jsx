"use client"
import React, { useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { BiMicrophone } from "react-icons/bi"; 
import { BsRecord2 } from "react-icons/bs";
import { voiceSearch } from "../../../dataService/searchData";
import styles from "../../../../public/styles/headerFooter.module.scss";

export default function VoiceRecorder(){

    const {
        startRecording,
        stopRecording, 
        isRecording, 
        recordingBlob 
    } = useAudioRecorder()

    const modeRef = useRef(null);
    const params = useParams();

    useEffect(() => {
        if (!recordingBlob) return;
        // console.log(recordingBlob);
        const audioFile = new File([recordingBlob], "audio.webm", {
            type: "audio/webm"
        });
        // console.log(audioFile)
        const formData = new FormData();
        formData.append("file", audioFile );
        // console.log(formData.get("file"));
        voiceSearch({
            voice : formData.get("file"),
            language : params.locale
        }).then( response => {
            console.log(response)
        }).catch( err => {
            console.log(err);
        });

    }, [recordingBlob]);
    
    let timer = null;
    function callRecorder(){
        if( isRecording ) {
            timer = setTimeout(() => {
                modeRef.current.classList.remove(styles["recordMode-show"])
            }, 400)
            stopRecording();
        }
        else {
            startRecording();
            modeRef.current.classList.add(styles["recordMode-show"]);
        }
    }

    return (
        <div>
            <button onClick={callRecorder} className={styles["filterButton"] + " ms-2 txt-c-large txt-darkBlue txt-c-nomal"}>
                { isRecording ? <BsRecord2/> : <BiMicrophone/> } 
            </button> 
            <div ref={modeRef} className={styles["recordMode"]}>
                { isRecording ? "در حال ضبط" :  "ضبط متوقف شد" }
            </div>
        </div>
    )
}