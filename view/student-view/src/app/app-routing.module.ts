import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './components/create/create.component';
import {ReadComponent} from './components/read/read.component';

const routes: Routes = [
  {path:'create', component: CreateComponent},
  {path:'read', component: ReadComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
