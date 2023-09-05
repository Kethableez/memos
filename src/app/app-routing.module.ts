import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME } from './home/home-routing.module';
import { LEARNING } from './learning/learning-routing.module';

const routes: Routes = [...HOME, ...LEARNING];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
