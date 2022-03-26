import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class GlobalStore {
  private usersSource = new BehaviorSubject<User[]>([]);
  users$ = this.usersSource.asObservable();

  private searchTextSource = new ReplaySubject<string>(1);
  searchText$ = this.searchTextSource.asObservable();

  constructor() {
  }

  emitUsers(users: User[]): void {
    this.usersSource.next(users);
  }

  emitSearchText(searchText: string) {
    this.searchTextSource.next(searchText);
  }
}
