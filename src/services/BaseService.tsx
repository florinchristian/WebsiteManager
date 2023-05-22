import axios from "axios/index";

abstract class BaseService<Model> {
  protected getBasePath(): string {
    return "http://192.168.0.118:6969";
  }

  public fetch: () => Promise<Model[]> = async () => {
    const result = await axios.get(`${this.getBasePath()}/${this.getServiceEndpoint()}`);
    return result.data;
  }

  public save: (model: Model) => void = async model => {
    await axios.post(`${this.getBasePath()}/${this.getServiceEndpoint()}`, model);
  }

  abstract getServiceEndpoint(): string;
}

export default BaseService;
