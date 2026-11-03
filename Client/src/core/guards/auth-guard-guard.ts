import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountServices } from '../services/account-services';
import { ToastService } from '../services/toast-service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const accoutService= inject(AccountServices);
  const Toast= inject(ToastService);

  
  if(accoutService.currentUser()) return true
  else{
    Toast.error("You shall not pass")
    return false
  }



};
