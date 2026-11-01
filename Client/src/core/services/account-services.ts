import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { IUser, IUserLogin } from '../../Types/User';
import { tap } from 'rxjs';

@Service()
export class AccountServices {
    currentUser= signal<IUser|null>(null);


    private http= inject(HttpClient);
    baseUrl= "http://localhost:5111/api/"


    register(creds:IUserLogin){
        return this.http.post<IUser>(this.baseUrl + "account/register", creds).pipe(
            tap(user=>{
                this._setCurrentUser(user);
            })

        )
    }


    login(creds: any){
        return this.http.post<IUser>(this.baseUrl + "account/login", creds).pipe(
            tap(user=>{
                this._setCurrentUser(user);

               
            })
        )
    }

    _setCurrentUser(user:IUser){
         localStorage.setItem("user", JSON.stringify(user));
            if(user) this.currentUser.set(user);
    }


    logout(){
        localStorage.removeItem("user");
        this.currentUser.set(null);
    }




}
