import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { InfoComponent } from './info/info.component';
import { TechappsComponent } from './techapps/techapps.component';

const routes: Routes = [
    {
        path: 'apps',
        component: AptitudeComponent
    }, {
        path: 'techapps',
        component: TechappsComponent
    },
    {
        path: 'info',
        component: InfoComponent
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }