
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDataForm } from '../models/data-form';
import { DataRawI } from "../models/data-raw.interface";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private urlApi = 'https://mach-eight.uc.r.appspot.com/';
  data$ = new BehaviorSubject<IDataForm>({});

  constructor(private http: HttpClient) {}

  public setData$(dataForm:IDataForm){
      this.data$.next(dataForm);
  }

  consumeData():Observable<DataRawI>{
    return this.http.get<DataRawI>(this.urlApi + '', {});
  }
}
