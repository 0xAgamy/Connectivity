import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountServices } from '../../core/services/account-services';

@Component({
  imports: [FormsModule],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {

  protected creds: any= {}

  constructor(protected _accountServices: AccountServices) {

  }

  Login(){
    this._accountServices.login(this.creds).subscribe({
      next: (res: any) => {
      },
      error: (err: any) => {
        
      }
    });
  }


  Logout(){
    this._accountServices.logout();
  }

}

