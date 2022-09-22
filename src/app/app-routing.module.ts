import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {LoginComponent} from "./login/login.component";
import {ImprintComponent} from "./imprint/imprint.component";
import {PrivacyComponent} from "./privacy/privacy.component";

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
