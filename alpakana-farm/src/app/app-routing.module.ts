import { InProgressModule } from './features/in-progress/in-progress.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/in-progress',
    pathMatch: 'full'
  },
  {path: 'in-progress', loadChildren: () => import('./features/in-progress/in-progress.module').then(m => m.InProgressModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
