import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRates} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IRates[]>{
    return this.httpClient.get<IRates[]>(urls.rates)
  }
}
