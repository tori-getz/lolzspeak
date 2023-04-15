export interface IAudioInputManager {
  getPermissions(): Promise<PermissionState>;
  monitor(): Promise<Function>;
}
