import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {MainWindowComponent} from './main-window/main-window.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './socond-page/second-page.component';
import {LastPageComponent} from './last-page/last-page.component';


const routes: Routes = [
  {path: '',
  redirectTo: '/first-page',
  pathMatch: 'full'},
  {path: 'first-page',
  component: FirstPageComponent},
  {path: 'second-page',
  component: SecondPageComponent},
  {path: 'last-page', component: LastPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
