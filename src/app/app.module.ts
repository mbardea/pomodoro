import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridExampleComponent } from './grid-example/grid-example.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import { TomatoCaseComponent } from './tomato-case/tomato-case.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
    declarations: [
        AppComponent,
        GridExampleComponent,
        HeaderComponent,
        ButtonBarComponent,
        TomatoCaseComponent,
        SettingsComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatGridListModule,
        BrowserAnimationsModule,
        MatButtonModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
