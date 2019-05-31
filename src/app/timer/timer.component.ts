import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})
export class TimerComponent implements OnInit {

  @Input("seconds") seconds: number;
  current: number

  timer$ = timer(1000, 1000);
  timerSubscription = null;

  constructor() {

  }

  tick() {
    if (this.current > 0) {
      this.current--;
    }
  }

  ngOnInit() {
    this.current = this.seconds;
    this.timerSubscription = this.timer$.subscribe(() => this.tick());
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  timeLeft(): string {
    let minutes = Math.floor(this.current / 60);
    let seconds = this.current - 60 * minutes;
    return `${this.padDuration(minutes)}:${this.padDuration(seconds)}`;
  }

  // Turns 7 into "07"
  padDuration(n: number): string {
    let durationStr = "0" + n;
    return durationStr.substr(-2);
  }
}
