import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit {

  // @Input("seconds") seconds: number;
  // current: string

  // timer$ = timer(1000, 1000);
  // timerSubscription = null;

  constructor(private tasksService: TasksService) {

  }

  // tick() {
  //   let task = this.tasksService.current;
  //   if (!task) {
  //     return;
  //   }
  //   this.current = this.timeLeft();
  // }

  ngOnInit() {
  //   //this.current = this.seconds;
  //   this.timerSubscription = this.timer$.subscribe(() => this.tick());
  }

  // ngOnDestroy() {
  //   this.timerSubscription.unsubscribe();
  // }

  // private timeLeft(): string {
  //   let task = this.tasksService.current;
  //   if (!task) {
  //     return this.formatDuration(0);
  //   }
  //   // Delta in seconds
  //   let delta = Math.floor((task.start.getTime() - Date.now()) / 1000 + task.duration);
  //   return this.formatDuration(delta);
  // }

}
