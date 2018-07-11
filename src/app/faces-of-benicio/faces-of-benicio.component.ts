import { Component, OnInit } from '@angular/core';
import { Actor, benicioList } from './benicio-data';

@Component({
  selector: 'app-faces-of-benicio',
  templateUrl: './faces-of-benicio.component.html',
  styleUrls: ['./faces-of-benicio.component.css']
})
export class FacesOfBenicioComponent implements OnInit {
  userInput: string;
  benicios: Array<Actor> = benicioList;

  constructor() { }

  ngOnInit() {
  }

}
