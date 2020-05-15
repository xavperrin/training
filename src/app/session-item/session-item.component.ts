import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
​
@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
​
export class SessionItemComponent implements OnInit {
  //name = "Formation Web";
  alignement = 'center';
  couleur = 'red';
  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
​
  constructor() { }
​
  ngOnInit(): void {
  }
​
  inscrire() {
    console.log("Nouvelle Inscription...");
    //this.session.name = "Formation Web Avancé";
        this.session.participants = +this.session.participants + 1;
    console.log(this.session.participants + "Participants");
    if(this.session.participants>=20){
      this.session.isCompleted=true;
    }
    this.participantsChange.emit({
      value: this.session.participants
    })
​
  }
​
}