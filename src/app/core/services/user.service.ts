import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserResponse} from "../models/user";
import {GlobalStore} from "./global-store";

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private store: GlobalStore) {
  }

  loadUsers(): void {
    const userApi = 'https://randomuser.me/api/?results=50';

    this.http.get<UserResponse>(userApi)
      .subscribe((response) => {
        this.store.emitUsers(response.results);
      });
  }
}
