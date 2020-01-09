import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue/queue.component';


const routes: Routes = [
  {path: 'queue', component: QueueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
