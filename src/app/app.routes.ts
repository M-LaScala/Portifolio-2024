import { Routes } from '@angular/router';

// home page
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];