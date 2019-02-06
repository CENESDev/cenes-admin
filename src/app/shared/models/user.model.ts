import { ArrayType } from "@angular/compiler";
import {Deserializable} from "./deserializable.model";

export class User {
    
    name: string;
    picture : string;
    owner: boolean;
    source : string;
    status: string;

    deserialize(input: any): this {
      Object.assign(this, input);
      return this;
    }
  }