import { Component, OnInit } from "@angular/core";
import { TodoResourceService } from "../business/resources/todo-resource.service";
import { Todo } from "../list-todos/list-todos.component";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  private id: number;
  private todo: Todo;
  constructor(
    private todoService: TodoResourceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.todo = new Todo(this.id, "", false, new Date());

    if (this.id != -1) {
      this.todoService
        .retreiveTodo("tonasolution", this.id)
        .subscribe(response => (this.todo = response));
    }
  }

  saveTodo() {
    if (this.todo.id === -1) {
      this.todoService
        .addTodo("tonasolution", this.todo)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(["todos"]);
        });
    } else {
      this.todoService
        .updateTodo("tonasolution", this.todo)
        .subscribe(response => {
          this.todo = response;
          this.router.navigate(["todos"]);
        });
    }
  }
}
