import {Component, Input, OnInit} from '@angular/core';
import {IRates} from "../../interfaces";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  @Input()
  rate: IRates
  constructor() { }

  ngOnInit(): void {
  }

}
