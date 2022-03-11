//core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { HomeComponent } from './page/home/home.component';
import { HomeRoutingModule } from './home.routing';

//routing

@NgModule({
    imports: [
        //core
        CommonModule,
        //routing
        HomeRoutingModule,
    ],
    declarations: [
        //components
        HomeComponent,
    ],
})
export class HomeModule {}
