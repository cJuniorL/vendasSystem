import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarCidadePage } from './listar-cidade';

@NgModule({
  declarations: [
    ListarCidadePage,
  ],
  imports: [
    IonicPageModule.forChild(ListarCidadePage),
  ],
})
export class ListarCidadePageModule {}
