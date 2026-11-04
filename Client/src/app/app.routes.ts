import { Routes } from '@angular/router';
import { Home } from '../features/home/home';
import { Memberlist } from '../features/members/memberlist/memberlist';
import { Memberdetailed } from '../features/members/memberdetailed/memberdetailed';
import { Lists } from '../features/lists/lists';
import { Messages } from '../features/messages/messages';
import { authGuardGuard } from '../core/guards/auth-guard-guard';
import { TestErrors } from '../features/test-errors/test-errors';
import { NotFound } from '../shared/errors/not-found/not-found';
import { ServerError } from '../shared/errors/server-error/server-error';

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

    {path:"errors", component:TestErrors},
    {path:"server-error", component:ServerError},

    {path:"**", component:NotFound},



];
