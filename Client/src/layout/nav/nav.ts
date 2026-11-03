import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountServices } from '../../core/services/account-services';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastService } from '../../core/services/toast-service';

@Component({
  imports: [FormsModule, RouterLink, RouterLinkActive],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {



  protected creds: any= {}

  constructor(protected _accountServices: AccountServices,
              private _router: Router,
            private _toast:ToastService) {

  }

  Login(){
    this._accountServices.login(this.creds).subscribe({
      next: (res: any) => {
        this._router.navigateByUrl("/members")
        this._toast.success("Login successful");

      },
      error: (err: any) => {
        console.log(err)
        this._toast.error(err.error);
        
      }
    });
  }


  Logout(){
    this._accountServices.logout();
      this._router.navigateByUrl("/")

  }

}

