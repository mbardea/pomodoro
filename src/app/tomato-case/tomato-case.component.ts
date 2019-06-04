import { Component, OnInit, Input } from '@angular/core';
import { TasksService, Task } from '../tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tomato-case',
  templateUrl: './tomato-case.component.html',
  styleUrls: ['./tomato-case.component.less']
})
export class TomatoCaseComponent implements OnInit {

  newTaskTitle: string = "";

  constructor(public tasksService: TasksService) {
   }

  ngOnInit() {
  }

  addTask() {
    this.tasksService.addTask(this.newTaskTitle, 15 * 60);
  }

  doneCurrent() {
    this.tasksService.doneCurrent();
  }

  newPomodoro() {
    let title = this.newTaskTitle || "Pomodoro";
    this.tasksService.addTask(title, 25 * 60);
  }

  newShortBreak() {
    this.tasksService.addTask("Short Break", 5 * 60);
  }

  newLongBreak() {
    this.tasksService.addTask("Long Break", 20 * 60);
  }

  deleteTask(id: string) {
    this.tasksService.deleteTask(id);
  }

  startEditTask(id: string) {
    this.tasksService.startEditTask(id);
  }

  endEditTask(id: string) {
    this.tasksService.endEditTask(id);
  }

  clearAllTasks() {
    this.tasksService.clearAllTasks();
  }

}
