import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {

  constructor() { }
  launchYear:number[]=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
  boolArr=["True","False"]

  yearFilter=null;
  launchSuccess=null;
  landSuccess=null
  @Output() filterConfig=new EventEmitter<{type:string,value:string}>()

  ngOnInit() {
  }
  applyLaunchSuccessFil(fil)
  {
    if(fil==this.launchSuccess)
    {
      this.launchSuccess=null
    }
    else
    {
      this.launchSuccess=fil
    }
    this.filterConfig.emit({type:'Launch',value:this.launchSuccess})
  }
  applyYearFil(fil)
  {
    if(fil==this.yearFilter)
    {
       this.yearFilter=null
    }
    else
    {
      this.yearFilter=fil
    }
    this.filterConfig.emit({type:'Year',value:this.yearFilter})
  }
  applyLandSuccessFil(fil)
  {
    if(fil==this.landSuccess)
    {
      this.landSuccess=null
    }
    else{
      this.landSuccess=fil
    }
    this.filterConfig.emit({type:'Land',value:this.landSuccess})

  }

}
