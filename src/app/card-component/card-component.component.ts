import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import {CommonServiceService} from '../common-service.service'

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit ,OnChanges {

  constructor(private commonSer:CommonServiceService) { }
  cardData

  @Input() yearFil
  @Input() landFil
  @Input() launchFil

  ngOnInit() {
    let yearFil=localStorage.getItem('yearFilter')?localStorage.getItem('yearFilter'):'null'
    let landFil=localStorage.getItem('landSuccess')?localStorage.getItem('landSuccess'):'null'
    let launchFil=localStorage.getItem('launchSuccess')?localStorage.getItem('launchSuccess'):'null'
    if(yearFil=='null')
    {
      yearFil=JSON.parse(yearFil)
    }
    if(landFil=='null')
    {
      landFil=JSON.parse(landFil)
    }
    if(launchFil=='null')
    {
      launchFil=JSON.parse(launchFil)
    }

    this.getCardData(yearFil,landFil,launchFil)
    // this.getCardData()
  }
  ngOnChanges(change:SimpleChanges)
  {
    // if(change.yearFil||change.landFil||change.launchFil)
    // {
    //   this.getCardData(this.yearFil,this.landFil,this.launchFil)
    // }
  }
  getCardData(yearfil=null,landfil=null,launchfil=null)
  {
    this.commonSer.getSpaceXData(yearfil,landfil,launchfil).toPromise().then((res)=>{
      this.cardData=res
    })
  }


}
