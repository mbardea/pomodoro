import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { timer } from 'rxjs';

// import * as moment from 'moment';

export interface Project {
  id: string,
  title: string,
  color: string,
}

export interface Task {
  id: string,
  title: string,
  type: string,
  duration: number,
  start: Date,
  edit?: boolean | null,
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private projectList: Project[] = []
  private _projects: BehaviorSubject<Project[]> = new BehaviorSubject(this.projectList);
  private readonly projects: Observable<Project[]> = this._projects.asObservable();

  private taskList: Task[] = []
  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject(this.taskList);
  public readonly tasks: Observable<Task[]> = this._tasks.asObservable();

  // private _current: Task;
  // private _currentBS: BehaviorSubject<Task> = new BehaviorSubject(this._current);
  // current: Observable<Task> = this._currentBS.asObservable();
  current: Task;
  private currentTimeLeftBS: BehaviorSubject<string> = new BehaviorSubject("");
  currentTimeLeft$: Observable<string> = this.currentTimeLeftBS.asObservable();

  timer$ = timer(1000, 1000);
  timerSubscription = null;

  constructor() {
    this.load();
    this.publishTasks();
    this.timerSubscription = this.timer$.subscribe(() => this.tick());
  }

  addProject(title: string, color: string) {
    const p = {
      id: uuid.v4(),
      title,
      color
    }
    this.projectList.push(p)
  }

  addTask(title: string, duration: number) {
    if (this.current) {
      this.doneCurrent();
    }

    let t = { 
      id: uuid.v4(),
      title,
      type: "p", 
      duration,
      start: new Date(),
    };

    this.current = t;
    // this.publishCurrent();

    // this.taskList = [...this.taskList, t];
    //this.publishTasks();

    this.currentTimeLeftBS.next(this.formatDuration(duration));
    this.saveLocal();
  }

  doneCurrent() {
    this.current.duration = Math.floor((Date.now() - this.current.start.getTime()) / 1000);
    this.taskList = [... this.taskList, this.current]
    this.publishTasks();
    this.current = null;
    this.currentTimeLeftBS.next('');
    this.save();
  }

  // private publishCurrent() {
  //   this._currentBS.next(this._current);
  // }

  private publishTasks() {
    this._tasks.next(this.taskList)
  }

  private publishProjectList() {
    this._projects.next(this.projectList);
  }

  private tick() {
    if (!this.current) {
      return;
    }

    let delta = Math.floor((this.current.start.getTime() - Date.now()) / 1000 + this.current.duration);

    this.currentTimeLeftBS.next(this.formatDuration(delta));

    if (delta <= 0) {
      this.doneCurrent();
    }
  }

  public formatDuration(duration: number): string {
    if (duration < 0) {
      return "00:00";
    }
    let minutes  = Math.floor(duration / 60);
    let seconds =  duration - 60 * minutes;

    return `${this.padDuration(minutes)}:${this.padDuration(seconds)}`;
  }

  // Turns 7 into "07"
  private padDuration(n: number): string {
    let durationStr = "0" + n;
    return durationStr.substr(-2);
  }

  startEditTask(id: string) {
    this.taskList.forEach( t => {
      if (t.id === id) {
        t.edit = true;
      }
    })    
  }

  endEditTask(id: string) {
    this.taskList.forEach( t => {
      if (t.id === id) {
        t.edit = false;
      }
    })    
  }

  deleteTask(id: string) {
    this.taskList = this.taskList.filter(t => {
      return t.id != id;
    })
    this.publishTasks();
  }

  clearAllTasks() {
    this.taskList = [];
    this.publishTasks();
  }

  private save() {
    this.saveLocal();
  }

  private load() {
    this.projectList = [
      {
        id: '1',
        title: "Language Weaver",
        color: "#009688",
      },
      {
        id: '2',
        title: "Tradows",
        color: "#1976d2"
      },
      {
        id: '3',
        title: "Personal",
        color: "#f06292"
      }
    ];
    this.publishProjectList();

    this.loadLocal();
  }

  private saveLocal() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    localStorage.setItem('currentTask', JSON.stringify(this.current));
  }
    
  private loadLocal() {
    try {
      this.taskList = JSON.parse(localStorage.getItem('tasks'));
      // re-parse the dates from string to Date
      this.taskList.forEach( t => {
        t.start = new Date(t.start);
      })

      this.current = JSON.parse(localStorage.getItem('currentTask'));
      if (this.current) {
        this.current.start = new Date(this.current.start); // TODO: refactor
      }
    }
    catch (e) {
      console.log("Failed to parse tasks from local storage: " + e)
    }
    if (!this.taskList) {
      this.taskList = [];
    }
  }
}
