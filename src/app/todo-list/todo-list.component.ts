import { Component, OnInit } from '@angular/core';
import { todos } from "../../mock/todos";
import {Todo} from "../../entity/todo";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = todos;

  constructor() {}

  ngOnInit(): void {}

}
