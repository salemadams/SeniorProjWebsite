import { Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {ProjectComponent} from "../components/project/project.component";
import {ContactComponent} from "../components/contact/contact.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
];
