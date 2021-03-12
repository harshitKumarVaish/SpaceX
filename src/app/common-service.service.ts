import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private _http:HttpClient) { }

  getSpaceXData(yearFilter,landFilter,launchFilter)
  {
    let str=''
    if(launchFilter)
    {
      str=str+'&launch_success='+(launchFilter=='True'?true:false)
    }
    if(landFilter)
    {
      str=str+'&land_success='+(landFilter=='True'?true:false)
    }
    if(yearFilter)
    {
      str=str+'&launch_year='+yearFilter
    }
     return this._http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100"+str)
  }
}
