import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { HomeComponent } from "./route/home/home.component";

const APP_ROUTES: Routes = [
    {
        path: "",
        component: HomeComponent
    }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);