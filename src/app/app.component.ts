import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  name:string = 'Tom';
  age:number = 24;

  // =============

  clicks: number = 0;

  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }
}
