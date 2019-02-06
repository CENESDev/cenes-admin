import { ArrayType } from "@angular/compiler";
import {Deserializable} from "./deserializable.model";

export class UserList {
    name : string;
    email: string;
    userId: string;

    deserialize(input: any): this {
      Object.assign(this, input);
      return this;
    }
  }