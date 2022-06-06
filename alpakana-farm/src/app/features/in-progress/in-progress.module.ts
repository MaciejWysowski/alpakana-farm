import { InProgressComponent } from './in-progress.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', component: InProgressComponent}];

@NgModule({
  declarations: [
    InProgressComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  entryComponents: [InProgressComponent]
})
export class InProgressModule { }
