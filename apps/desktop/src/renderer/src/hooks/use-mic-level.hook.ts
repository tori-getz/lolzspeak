import { useRef, useState } from "react";

interface IUseMicLevel {
  volume: number;
  start: () => void;
  stop: () => void;
}

export const useMicLevel = (): IUseMicLevel => {
  const [ volume, setVolume ] = useState<number>(0);

  const streamRef = useRef<MediaStream>();
  const dataRef = useRef<Uint8Array>();
  const rafIdRef = useRef<number>();
  const ctxRef = useRef<AudioContext>();
  const analyserRef = useRef<AnalyserNode>();
  const sourceRef = useRef<MediaStreamAudioSourceNode>();

  const tick = () => {
    analyserRef.current?.getByteTimeDomainData(dataRef.current!);
    let volumeSum = 0;

    for (const vol of dataRef.current!) {
      volumeSum += vol;
    }

    setVolume(volumeSum);

    rafIdRef.current = requestAnimationFrame(tick);
  }

  const start = async () => {
    streamRef.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    ctxRef.current = new AudioContext();
    analyserRef.current = ctxRef.current.createAnalyser();
    dataRef.current = new Uint8Array();
    sourceRef.current = ctxRef.current.createMediaStreamSource(streamRef.current);
    sourceRef.current.connect(analyserRef.current);
    rafIdRef.current = requestAnimationFrame(tick);
  }

  const stop = () => {
    cancelAnimationFrame(rafIdRef.current!);
    analyserRef.current?.disconnect();
    sourceRef.current?.disconnect();
  }

  return {
    volume,
    start,
    stop,
  }
}
