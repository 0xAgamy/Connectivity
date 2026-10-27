import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('Connectivity');
  private _http= inject(HttpClient);
  protected members=  signal<any>([]);


  
  
  async ngOnInit() {
    this.members.set(
    await  this.GetMembers()
    );
  }

  async GetMembers() {
    try{
      return lastValueFrom(this._http.get("http://localhost:5111/Members"));
    }catch(error){
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
