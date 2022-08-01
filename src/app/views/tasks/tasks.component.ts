import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {

  }

  ngOnInit() {
    this.tasks = this.dataHandler.getTasks();
    console.log(this.tasks);
  }
}
