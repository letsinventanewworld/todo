import { Component, OnInit } from "@angular/core";
import { TodoResourceService } from "../business/resources/todo-resource.service";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  todos: Todo[];
  message: string;

  constructor(private todoService: TodoResourceService) {}

  ngOnInit() {
    this.retreiveAllTodos();
  }

  deleteTodo(id) {
    console.log(id);
    this.todoService.deleteTodo("tonasolution", id).subscribe(response => {
      console.log(response);
      this.message = `The todo ${id} is deleted successfully`;
      this.retreiveAllTodos();
    });
  }
  retreiveAllTodos() {
    this.todoService.retreiveAllTodos("tonasolution").subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }
}
