import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroCidadePage } from './cadastro-cidade';

@NgModule({
  declarations: [
    CadastroCidadePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroCidadePage),
  ],
})
export class CadastroCidadePageModule {}
