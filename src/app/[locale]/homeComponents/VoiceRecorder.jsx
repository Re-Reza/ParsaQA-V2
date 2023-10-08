"use client"
import React, { useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAudioRecorder, AudioRecorder } from "react-audio-voice-recorder";
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
    const { push } = useRouter();

    useEffect(() => {
        if (!recordingBlob) return;
        // console.log(recordingBlob);
        console.log(recordingBlob)
        const blobObj = {
            size : recordingBlob.size,
            type  : recordingBlob.type
        }
        const audioFile = new File([blobObj], "out.webm", {
            type: "audio/webm"
        });
        // const formData = new FormData();
        // formData.append("file", audioFile );
        // console.log(formData.get("file"));
        console.log(audioFile)
        const fileObj = {
            lastModified : audioFile.lastModified,
            lastModifiedDate : audioFile.lastModifiedDate,
            name : audioFile.name,
            size : audioFile.size,
            type : audioFile.type,
            webkitRelativePath : audioFile.webkitRelativePath
        }
        // console.log(fileObj);
        // console.log(JSON.stringify(fileObj))
        push(`/search/audio?audioF=${JSON.stringify(blobObj)}`);
        // voiceSearch({
        //     voice : audioFile,
        //     language : params.locale
        // }).then( response => {
        //     console.log(JSON.stringify(audioFile))
        //     const params = JSON.stringify(recordingBlob);
        //     push(`/search/${params}?isAudio=1`);
        // }).catch( err => {
        //     console.log(err);
        // });

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