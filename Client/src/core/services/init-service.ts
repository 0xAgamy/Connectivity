import { inject, Service } from '@angular/core';
import { AccountServices } from './account-services';
import { Observable, of } from 'rxjs';

@Service()
export class InitService {

    private _accountService= inject(AccountServices)
    init(){
        const userString= localStorage.getItem("user");
        if(!userString) return of(null);


        const user= JSON.parse(userString);
        this._accountService.currentUser.set(user);

    return of (null
    )
    }
}
