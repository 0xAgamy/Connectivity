import { Component, inject, input, output } from '@angular/core';
import { IUser, IUserRegister } from '../../../Types/User';
import { FormsModule } from '@angular/forms';
import { AccountServices } from '../../../core/services/account-services';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {
  private _AccountServices= inject(AccountServices);

  cancelRegister= output<boolean>();


  protected creds= {} as IUserRegister;

  register(){
    this._AccountServices.register(this.creds).subscribe({
      next: user=>{
        console.log(user);
        this.cancel();
      }
    })
  }


  cancel(){
    this.cancelRegister.emit(false);
  }


}

