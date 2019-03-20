import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FriendsService } from '../friends.service';

@Component({
  selector: '.app-newcompo',

  template: `
    <h2>Liste de nos amis</h2>
    <ul *ngFor="let friend of friends">
      <li>Prenon : {{friend.name}} - {{ friend.age }} ans . Tu es un(e) {{friend.sexe}}.</li>
    </ul>
  `,
  styles: [] 
})
export class NewcompoComponent implements OnInit {
  public friends = [];

  public identity = 'Alex';
  public pi = '3.14';

  @Input('parentData') public friendAge;
  @Output() public friendName = new EventEmitter();


  constructor(private _friendsService: FriendsService) { }

  ngOnInit() {
    this._friendsService.getFriends().subscribe(data => (this.friends = data));
  }

  eventName() {
    this.friendName.emit("Justine")
  }
}




  //Tant que hasError est true alors j'active mon css de test-class 
  // <h2 [class.test-class] ="hasError">Bonjour à tous </h2>
  // styles: [`
  // .test-class {
  //     color: crimson;
  // }
  // public redClass = 'test-class';
  // public hasError = false;


  // <p>{{'Mon amie justine à ' +  friendAge + ' ans.'}}</p>
  // <button (click)="eventName()">Nom de mon amie</button>