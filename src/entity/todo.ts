import {User} from "./user";

export interface Todo {
  id?: number;
  task?: string;
  done?: boolean;
  user?: User;
}
