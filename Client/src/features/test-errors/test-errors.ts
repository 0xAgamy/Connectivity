import { HttpClient } from '@angular/common/http';
import { Component, inject, Signal, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-test-errors',
  styleUrl: './test-errors.css',
  templateUrl: './test-errors.html',
})
export class TestErrors {

  private http= inject(HttpClient)
  validationError= signal<string[]>([]);

  BaseUrl:string = "http://localhost:5111/api/"

  get404Error(){
    this.http.get(this.BaseUrl + "buggy/not-found").subscribe({
      next:(response)=>{
        console.log(response)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

get400Error(){
    this.http.get(this.BaseUrl + "buggy/bad-request").subscribe({
      next:(response)=>{
        console.log(response)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

get500Error(){
    this.http.get(this.BaseUrl + "buggy/server-error").subscribe({
      next:(response)=>{
        console.log(response)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  get400ValidationError(){
    this.http.post(this.BaseUrl + "Account/register",{}).subscribe({
      next:(response)=>{
        console.log(response)
      },
      error:(err)=>{
        console.log(err)
        this.validationError.set(err)
      }
    })
  }

}
