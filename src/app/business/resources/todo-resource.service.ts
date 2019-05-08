import { Injectable } from "@angular/core";
import { Todo } from "../../list-todos/list-todos.component";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoResourceService {
  constructor(private http: HttpClient) {}

  retreiveAllTodos(username) {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
  }

  deleteTodo(username, id) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }
}