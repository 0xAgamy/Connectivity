import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { Memberlist } from '../features/members/memberlist/memberlist';
import { Memberdetailed } from '../features/members/memberdetailed/memberdetailed';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuardGuard } from '../core/guards/auth-guard-guard';

export const routes: Routes = [
    
    {path:"", component:Home},

    {
        path:"",
        runGuardsAndResolvers:'always',
        canActivate:[authGuardGuard],
        children:[
            
            {path:"members", component:Memberlist, canActivate:[authGuardGuard]},
            {path:"members/:id", component:Memberdetailed},

            {path:"lists", component:Lists},
            {path:"messages", component:Messages},

        ]
    },


    {path:"**", component:Home},



];
