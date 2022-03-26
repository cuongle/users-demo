import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class UserStore {
  private usersSource = new BehaviorSubject<User[]>([]);
  users$ = this.usersSource.asObservable();

  constructor() {
  }

  emitUsers(users: User[]): void {
    this.usersSource.next(users);
  }
}
