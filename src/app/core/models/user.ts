import {Name} from "./name";
import {Dob} from "./dob";
import {Picture} from "./picture";
import {Info} from "./info";

export interface User {
  email: string;
  gender: string;
  name: Name;
  dob: Dob;
  nat: string;
  phone: string;
  cell: string;
  picture: Picture;
}

export interface UserResponse {
  info: Info;
  results: User[];
}

