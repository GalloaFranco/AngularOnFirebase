import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  templateUrl: './login-dumb.component.html',
  styleUrls: ['./login-dumb.component.css']
})
export class LoginDumbComponent implements OnInit {

  loginEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  sendLoginEvent() {
    this.loginEventEmitter.emit();
  }
}
