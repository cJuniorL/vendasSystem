import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarProdutoPage } from './listar-produto';

@NgModule({
  declarations: [
    ListarProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarProdutoPage),
  ],
})
export class ListarProdutoPageModule {}
