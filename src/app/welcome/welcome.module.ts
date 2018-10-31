import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [
        RouterModule.forChild([
            { path: 'welcome', component: WelcomeComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class WelcomeModule { }
