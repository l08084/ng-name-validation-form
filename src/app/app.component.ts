import { Component } from '@angular/core';

export class AccountKeySet {
  constructor(public key: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  keySet = new AccountKeySet('');
  hide = true;
  constructor() {}

  onSubmit() {
    console.log();
  }
}
