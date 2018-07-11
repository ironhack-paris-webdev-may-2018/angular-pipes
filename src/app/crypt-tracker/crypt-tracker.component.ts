import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypt-tracker',
  templateUrl: './crypt-tracker.component.html',
  styleUrls: ['./crypt-tracker.component.css']
})
export class CryptTrackerComponent implements OnInit {
  currentValue: number = 999;
  timerId: number;

  constructor() { }

  ngOnInit() {
    // start an interval loop and save the id for canceling later
    this.timerId =
      setInterval(() => {
        // increase by 1.5%
        this.currentValue *= 1.015;
      }, 2000);
  }

  ngOnDestroy() {
    // stop te interval loop when the component is removed
    clearInterval(this.timerId);
  }
}
