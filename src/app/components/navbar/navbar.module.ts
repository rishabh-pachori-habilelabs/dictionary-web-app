import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from "@angular/forms";
import { DarkModeModule } from "../dark-mode/dark-mode.module";

@NgModule({
    declarations:[
        NavbarComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        DarkModeModule
    ],
    exports:[
        NavbarComponent
    ]

})
export class NavbarModule {}