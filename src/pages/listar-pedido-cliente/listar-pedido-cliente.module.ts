import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarPedidoClientePage } from './listar-pedido-cliente';

@NgModule({
  declarations: [
    ListarPedidoClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ListarPedidoClientePage),
  ],
})
export class ListarPedidoClientePageModule {}
