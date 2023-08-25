import React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

export default function VoiceRecorder(){
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        console.log(url)
        // const audio = document.createElement("audio");
        // audio.src = url;
        // audio.controls = true;
        // document.body.appendChild(audio);
    };

    const { } = useAudioRecorder()

    return (
        <AudioRecorder 
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }} 
        downloadOnSavePress={true}
        downloadFileExtension="webm"
        />
    )
}