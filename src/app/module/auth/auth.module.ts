//core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { LoginComponent } from 'src/app/Components/login/login.component';

//routing
import { AuthRoutingModule } from './auth.routing';
@NgModule({
    imports: [
        //core
        CommonModule,

        //routing
        AuthRoutingModule,
    ],
    declarations: [
        //components
        LoginComponent,
    ],
})
export class AuthModule {}
