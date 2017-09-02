import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewClientePage } from './view-cliente';

@NgModule({
  declarations: [
    ViewClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewClientePage),
  ],
})
export class ViewClientePageModule {}
