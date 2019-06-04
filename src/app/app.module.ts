import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';


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

import { TasksService } from './tasks.service';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
    declarations: [
        AppComponent,
        GridExampleComponent,
        HeaderComponent,
        ButtonBarComponent,
        TomatoCaseComponent,
        SettingsComponent,
        TimerComponent,
        CustomDatePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatGridListModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        MatTableModule,
    ],
    providers: [TasksService],
    bootstrap: [AppComponent]
})
export class AppModule { }
