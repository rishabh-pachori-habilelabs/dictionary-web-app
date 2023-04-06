import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NavbarModule } from "src/app/components/navbar/navbar.module";
import { HomePage } from "./home.page";

@NgModule({
    declarations:[
        HomePage
    ],
    imports:[
        CommonModule,
        NavbarModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path:'', component: HomePage }
        ])
    ],
    providers: [],
    

})
export class HomeModule {}