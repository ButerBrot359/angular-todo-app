import { Component, OnInit } from '@angular/core';

import { ITodo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];
  inputTodo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
      {
        content: 'Third todo',
        completed: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i === id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((_, i) => id !== i);
  }

  addTodo() {
    if (this.inputTodo.trim() === '') {
      this.inputTodo = '';
      return;
    }
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
