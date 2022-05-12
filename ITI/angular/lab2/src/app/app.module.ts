import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{StudentModule} from "./student/student.module";
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {DepartmentModule} from "./department/department.module";
import { PowerToxPipe } from './power-tox.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PowerToxPipe
    ],
    imports: [
        BrowserModule,
        CoreModule,
       StudentModule,
        DepartmentModule
    ],
    providers: [],
    exports: [
       // PowerToxPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
