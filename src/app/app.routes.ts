import { Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {GameComponent} from "../components/game/game.component";
import {RulesComponent} from "../components/rules/rules.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'rules', component: RulesComponent }
];
