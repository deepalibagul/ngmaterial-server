import { Component, OnInit } from '@angular/core';
// import 'rxjs/Observable';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { DataSource } from '@angular/cdk/collections';
// import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-usetable',
  templateUrl: './usetable.component.html',
  styleUrls: ['./usetable.component.css']
})
export class UsetableComponent implements OnInit {
  datasource = new TodoDataSource(this.todoService);
  displayedColumns = ['ID', 'title'];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
}
export class TodoDataSource extends DataSource<any> {
  constructor(private todoService: TodoService) {
    super();
  }
  connect(): Observable<Todo[]> {
    return this.todoService.getTodo();
  }
  disconnect() { }
}
