import { Component, OnInit } from '@angular/core';
import {IRate, IRates} from "../../interfaces";
import {RatesService} from "../../services/rates.service";

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
 rates:IRates[];
 rate:IRate
  from: any;
  to: any;
  amount: number;
  result: number;

  onConvert(): void {
    if (this.rate){
      this.result = this.amount * this.rate.rate;
    }
  }

    constructor(private rateService: RatesService) {


    }

  ngOnInit(): void {
    this.rateService.getAll().subscribe(value => {this.rates = value})

  }


}
