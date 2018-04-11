import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { LojaModel } from '../../model/loja.model'
import { CategoriaModel } from '../../model/categoria.model'
import { ProdutoModel, Custo } from '../../model/produto.model'
import { Observable } from 'rxjs/Observable';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

@IonicPage()
@Component({
  selector: 'page-config-produto',
  templateUrl: 'config-produto.html',
})
export class ConfigProdutoPage {

  lojas$: Observable<LojaModel[]>
  categorias$: Observable<CategoriaModel[]>
  produtos$: Observable<ProdutoModel[]>;

  produto: ProdutoModel = new ProdutoModel();
  custo: Custo;

  constructor(private barcodeScanner: BarcodeScanner,
    private db1: DatabaseProvider<LojaModel[]>,
    private db2: DatabaseProvider<CategoriaModel[]>,
    private db3: DatabaseProvider<ProdutoModel[]>,
    public navCtrl: NavController, public navParams: NavParams) {

      this.produto.custo = new Array<Custo>();
      this.custo = new Custo();

    this.lojas$ = this.db1
    .get('lojas')
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    })

    this.categorias$ = this.db2
    .get('categorias')
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    })

    this.produtos$ = this.db3.
    get('alimentacao')
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    })

  }

  ionViewDidLoad() {
    
  }

  cancelar(){
    this.navCtrl.pop();
  }

  salvar(obj: any){
    this.produto.custo.push(this.custo)
    //console.log(this.produto)
    this.db3.add(obj)
    //this.navCtrl.pop()
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.produto.codigo = barcodeData.text
    }).catch(err => {
      console.error("[BARCODE SCAN] - "+err);
    })
  }
}
