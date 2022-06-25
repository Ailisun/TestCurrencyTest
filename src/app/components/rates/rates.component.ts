import { Component, OnInit } from '@angular/core';
import {IRate} from "../../interfaces";
import {RatesService} from "../../services/rates.service";

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
 rates:IRate[];
 amount = 1
  rate= 28

 convert():number{
   return this.amount * this.rate;
 }

    constructor(private rateService: RatesService) {


    }

  ngOnInit(): void {
    this.rateService.getAll().subscribe(value => {this.rates = value})

  }


}
