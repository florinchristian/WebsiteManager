import BaseModel from "./BaseModel";

class Subscriber extends BaseModel{
  public readonly deviceToken: string;

  constructor(deviceUUID: string, deviceToken: string) {
    super(deviceUUID);

    this.deviceToken = deviceToken;
  }
}

export default Subscriber;
