import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DisplayColorComponent } from './display-color/display-color.component';

const routes: Routes = [
  { path: 'colors', component: AppComponent },
  { path: 'color/:id', component: DisplayColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
