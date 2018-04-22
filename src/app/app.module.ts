import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComprasPage } from '../pages/compras/compras';
import { ReceitasPage } from '../pages/receitas/receitas';
import { CategoriasPage } from '../pages/categorias/categorias';
import { RelatorioPage } from '../pages/relatorio/relatorio';
import { LojasPage } from '../pages/lojas/lojas'
import { ConfigProdutoPage } from '../pages/config-produto/config-produto'

import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

import { CONFIG } from './firebase.config'

import { FormatPipe } from '../pipes/format/format'
import { ProdutoProvider } from '../providers/produto/produto';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { LojaProvider } from '../providers/loja/loja';
import { CompraProvider } from '../providers/compra/compra';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ComprasPage,
    CategoriasPage,
    ReceitasPage,
    RelatorioPage,
    LojasPage,
    FormatPipe,
    ConfigProdutoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ComprasPage,
    CategoriasPage,
    ReceitasPage,
    RelatorioPage,
    LojasPage,
    ConfigProdutoPage
  ],
  providers: [
    StatusBar,
    //SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    ProdutoProvider,
    CategoriaProvider,
    LojaProvider,
    CompraProvider
  ]
})
export class AppModule {}
