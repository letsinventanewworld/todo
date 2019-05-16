import { Injectable } from "@angular/core";
import { Todo } from "../../list-todos/list-todos.component";
import { HttpClient } from "@angular/common/http";
import { API_URL } from "../../app.constants";

@Injectable({
  providedIn: "root"
})
export class TodoResourceService {
  constructor(private http: HttpClient) {}

  retreiveAllTodos(username) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retreiveTodo(username, id) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, todo) {
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos`, todo);
  }

  addTodo(username, todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }
}
