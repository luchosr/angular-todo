import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() { }

  ngOnInit(): void {

    this.todos = [
      {
        content:"First todo",
        completed:false
      },
      {
        content: "second todo",
        completed: true
      }
    ]
  }


  toggleDone(id){
    this.todos.map((v,i)=>{
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

}
