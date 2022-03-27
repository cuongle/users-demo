import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {User} from "../models/user";
import {SearchOptions} from "../models/search-options";

@Injectable()
export class GlobalStore {
  private usersSource = new BehaviorSubject<User[]>([]);
  users$ = this.usersSource.asObservable();

  private searchOptionsSource = new BehaviorSubject<SearchOptions>({});
  searchOptions$ = this.searchOptionsSource.asObservable();

  constructor() {
  }

  emitUsers(users: User[]): void {
    this.usersSource.next(users);
  }

  emitSearchText(searchText: string | undefined) {
    let currentSearchOptions = this.searchOptionsSource.getValue();

    this.searchOptionsSource.next({
      ...currentSearchOptions,
      searchText: searchText
    });
  }

  emitGender(gender: string | undefined) {
    let currentSearchOptions = this.searchOptionsSource.getValue();

    this.searchOptionsSource.next({
      ...currentSearchOptions,
      gender: gender
    });
  }
}
