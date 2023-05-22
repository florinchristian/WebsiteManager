// type Message = {
//   id: bigint,
//   nickname: string,
//   email: string,
//   message: string
// };

import BaseModel from "./BaseModel";

class Message extends BaseModel {
  public nickname: string;
  public email: string;
  public message: string;

  constructor(id: bigint, nickname: string, email: string, message: string) {
    super(id);

    this.id = id;
    this.nickname = nickname;
    this.email = email;
    this.message = message;
  }
}

export default Message;
