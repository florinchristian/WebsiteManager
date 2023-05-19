class Subscriber {
  private deviceUUID: string;
  private deviceToken: string;

  constructor(deviceUUID: string, deviceToken: string) {
    this.deviceUUID = deviceUUID;
    this.deviceToken = deviceToken;
  }

  public getDeviceUUID(): string {
    return this.deviceUUID;
  }

  public getDeviceToken(): string {
    return this.deviceToken;
  }
}

export default Subscriber;
