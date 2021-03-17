import { Component, ViewChild } from '@angular/core';
import { CardComponentComponent } from './card-component/card-component.component';
import { FilterComponentComponent } from './filter-component/filter-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spaceX';
  yearFil=null
  landFil=null
  launchFil=null
  @ViewChild(CardComponentComponent) 'cardComponent':CardComponentComponent
  @ViewChild(FilterComponentComponent) 'filterComponent':FilterComponentComponent
  catchEvForFilter(ev){
   console.log(ev)
  //  if(ev.type=='Year')
  //  {
  //    this.yearFil=ev.value
  //  }
  //  else if(ev.type=='Launch')
  //  {
  //    this.launchFil=ev.value
  //  }
  //  else
  //  {
  //    this.landFil=ev.value
  //  }
   this.yearFil=this.filterComponent.yearFilter
   this.landFil=this.filterComponent.landSuccess
   this.launchFil=this.filterComponent.launchSuccess
   if(this.yearFil&&this.yearFil=='null')
   {
     this.yearFil=null
   }
   if(this.landFil&&this.landFil=='null')
   {
     this.landFil=null
   }
   if(this.launchFil&&this.launchFil=='null')
   {
     this.launchFil=null
   }
   this.cardComponent.getCardData(this.yearFil,this.landFil,this.launchFil)

  }
}
