import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = 'Tran Thien Tu';
  age = 20;

  handleClick() {
    alert('Bạn đã click button');
  }
}