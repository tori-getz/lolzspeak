import { sleep } from "./sleep.util";

export const getMicVolume = async (): Promise<number> => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

  const ctx = new AudioContext();
  const source = ctx.createMediaStreamSource(stream);
  const analyser = ctx.createAnalyser();

  source.connect(analyser);

  const volumes = new Float32Array(analyser.fftSize);

  await sleep(1000);

  analyser.getFloatTimeDomainData(volumes);

  analyser.connect(ctx.destination)

  console.log(stream.getAudioTracks());

  return volumes[0];
}
