import BaseService from "./BaseService";
import Message from "../model/Message";

class MessagesService extends BaseService<Message> {
  getServiceEndpoint(): string {
    return "message";
  }
}

export default MessagesService;
