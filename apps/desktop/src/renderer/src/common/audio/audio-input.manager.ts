import { injectable } from "inversify";
import { IAudioInputManager } from "./types";

@injectable()
export class AudioInputManager implements IAudioInputManager {
  private ctx: AudioContext = new AudioContext();

  public async getPermissions() {
    // @ts-ignore
    const permissions = await navigator.permissions.query({ name: 'microphone' });

    return permissions.state;
  }

  public async monitor(): Promise<Function> {
    const userMedia = await navigator.mediaDevices.getUserMedia();
    const source = this.ctx.createMediaStreamSource(userMedia);

    source.connect(this.ctx.destination);

    return () => {
      source.disconnect();
    };
  }
}
