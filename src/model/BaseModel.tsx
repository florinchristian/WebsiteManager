abstract class BaseModel {
  public id: bigint | string;

  protected constructor(id: bigint | string) {
    this.id = id;
  }
}

export default BaseModel;
