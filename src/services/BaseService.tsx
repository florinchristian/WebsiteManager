import axios from "axios/index";
import BaseModel from "../model/BaseModel";

abstract class BaseService<Model extends BaseModel> {
  protected getBasePath(): string {
    return "http://192.168.168.163:6969";
  }

  public fetch: () => Promise<any[]> = async () => {
    const result =
      await axios.get(`${this.getBasePath()}/${this.getServiceEndpoint()}`);

    return result.data;
  }

  public save: (model: Model) => void = async model => {
    await axios
      .post(`${this.getBasePath()}/${this.getServiceEndpoint()}`, model);
  }

  public delete: (model: Model) => void = async model => {
    await axios.delete(`${this.getBasePath()}/${this.getServiceEndpoint()}`, {
      params: {
        "id": model.id
      }
    });
  }

  abstract getServiceEndpoint(): string;
}

export default BaseService;
