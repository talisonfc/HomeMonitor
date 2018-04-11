import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigProdutoPage } from './config-produto';

@NgModule({
  declarations: [
    ConfigProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigProdutoPage),
  ],
})
export class ConfigProdutoPageModule {}
