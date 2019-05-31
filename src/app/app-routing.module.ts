import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TomatoCaseComponent } from './tomato-case/tomato-case.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: 'timer', component: TomatoCaseComponent },
    { path: 'settings', component: SettingsComponent },
    { path: '**', component: TomatoCaseComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
