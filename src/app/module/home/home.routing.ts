//core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

//components

const routes: Routes = [
    { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
    { path: '', children: [{ path: 'home', component: HomeComponent }] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
