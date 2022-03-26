import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserResponse} from "../models/user";
import {UserStore} from "./user-store";

@Injectable()
export class UserService {
  constructor(private http: HttpClient, private userStore: UserStore) {
  }

  loadUsers(): void {
    const userApi = 'https://randomuser.me/api/?results=50';

    this.http.get<UserResponse>(userApi)
      .subscribe((response) => {
        this.userStore.emitUsers(response.results);
      });
  }
}
