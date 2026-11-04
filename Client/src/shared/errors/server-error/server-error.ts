import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IApiErorr } from '../../../Types/Error';

@Component({
  imports: [],
  selector: 'app-server-error',
  styleUrl: './server-error.css',
  templateUrl: './server-error.html',
})
export class ServerError {
  protected error:IApiErorr
  protected showDetails =false
  private _router= inject(Router)

  constructor() {
    const navivation= this._router.currentNavigation();
    this.error=navivation?.extras?.state?.['error']
  }


  detailsToggle(){
    this.showDetails= !this.showDetails
  }

    

}
