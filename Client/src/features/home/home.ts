import { Component, Input, signal } from '@angular/core';
import { Register } from '../account/register/register';
import { IUser } from '../../Types/User';

@Component({
  imports: [Register],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {


  protected regiestedMode= signal(false);


showRegister(value:boolean){
    this.regiestedMode.set(value);
  }

}
