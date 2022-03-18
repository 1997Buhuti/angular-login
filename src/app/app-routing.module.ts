import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => import('./module/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./module/home/home.module').then((m) => m.HomeModule),
            },
        ],
    },
    //fallback path

    { path: '**', redirectTo: '/dashboard/notfound', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
