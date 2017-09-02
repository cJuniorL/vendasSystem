import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InserirClientePage } from './inserir-cliente';

@NgModule({
  declarations: [
    InserirClientePage,
  ],
  imports: [
    IonicPageModule.forChild(InserirClientePage),
  ],
})
export class InserirClientePageModule {}
