import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-changer',
  templateUrl: './date-changer.component.html',
  styleUrls: ['./date-changer.component.css']
})
export class DateChangerComponent implements OnInit {
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  addHours(h: number) {
    // make a copy of the date
    const dateCopy = new Date(this.currentDate);

    // calculate new hours by adding to the previous hours
    const newHours = h + dateCopy.getHours();

    // update the hours in the date copy
    dateCopy.setHours(newHours);

    // replace the previous date with the updated copy
    this.currentDate = dateCopy;
  }

  resetDate() {
    this.currentDate = new Date();
  }
}
