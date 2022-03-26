import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import {GlobalStore, UserStore} from "./core/services/user-store";
import {UserService} from "./core/services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, GlobalStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
