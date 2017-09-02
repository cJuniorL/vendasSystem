import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarClientePage } from './listar-cliente';

@NgModule({
  declarations: [
    ListarClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ListarClientePage),
  ],
})
export class ListarClientePageModule {}
