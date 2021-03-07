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

  @Input() yearFil=null
  @Input() landFil=null
  @Input() launchFil=null

  ngOnInit() {
    this.getCardData()
  }
  ngOnChanges(change:SimpleChanges)
  {
    if(change.yearFil||change.landFil||change.launchFil)
    {
      this.getCardData(this.yearFil,this.landFil,this.launchFil)
    }
  }
  getCardData(yearfil=null,landfil=null,launchfil=null)
  {
    this.commonSer.getSpaceXData(yearfil,landfil,launchfil).toPromise().then((res)=>{
      this.cardData=res
    })
  }


}
