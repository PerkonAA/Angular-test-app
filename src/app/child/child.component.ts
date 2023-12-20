import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() userName: string = '';
  _userAge: number = 0;

  @Input() 
  set userAge(age:number) {
    if (age < 0)
      this._userAge = 0;
    else if (age > 100)
      this._userAge = 100;
    else
      this._userAge = age;
  }
  get userAge() { return this._userAge; }

  // =========================

  @Output() onChanged = new EventEmitter<boolean>();

  change(increased:any) {
    this.onChanged.emit(increased);
  }

  // ================
  @Output() userNameChange = new EventEmitter<string>();
  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
