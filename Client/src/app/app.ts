import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Nav } from '../layout/nav/nav';
import { AccountServices } from '../core/services/account-services';
import { Home } from '../features/home/home';

@Component({
  imports: [Nav, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Connectivity');

  private _router= inject(Router);


  



  
  




}
