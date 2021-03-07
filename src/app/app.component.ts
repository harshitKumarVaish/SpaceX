import { Component } from '@angular/core';

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
  catchEvForFilter(ev){
   console.log(ev)
   if(ev.type=='Year')
   {
     this.yearFil=ev.value
   }
   else if(ev.type=='Launch')
   {
     this.launchFil=ev.value
   }
   else
   {
     this.landFil=ev.value
   }

  }
}
