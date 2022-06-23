import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRate} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IRate[]>{
    return this.httpClient.get<IRate[]>(urls.rate)
  }
}
