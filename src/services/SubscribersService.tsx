import BaseService from "./BaseService";
import Subscriber from "../model/Subscriber";

class SubscribersService extends BaseService<Subscriber> {
  getServiceEndpoint(): string {
    return "subscriber";
  }
}

export default SubscribersService;
