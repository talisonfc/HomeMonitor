import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { CompraModel } from '../../model/compra.model'
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ProdutoModel } from '../../model/produto.model';
import { CompraProvider } from '../../providers/compra/compra';
import { ProdutoProvider } from '../../providers/produto/produto';

@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {

  compras$: Observable<CompraModel[]>
  rol$: Observable<ProdutoModel[]>
  
  lista: Array<ProdutoModel> = new Array();
  option: string = "historico";

  constructor(private dbcompras: CompraProvider<CompraModel[]>,
    private dbprodutos: ProdutoProvider<ProdutoModel[]>,
    public navCtrl: NavController, public navParams: NavParams,
    private alert: AlertController) {

      this.compras$ = this.dbcompras
      .get('compras')
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      })

      this.rol$ = this.dbprodutos
      .get('alimentacao')
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      })

      this.rol$.subscribe( data => {
        data.forEach(el => {
          if( el.qtn < el.qtn_min){
            this.lista.push(el);
          }
        })
        //this.lista.push()
      })
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComprasPage');
  }

  addCompra(obj: any){
    var novo = false
    if(obj === undefined){
      obj = new CompraModel();
      novo = true;
    }
    var prompt = this.alert.create({
      title: 'Adicionar nova compra',
      inputs: [
        {
          name: "nome",
          placeholder: "Nome",
          value: obj.nome
        },
        {
          name: "valor",
          placeholder: "Valor",
          type: "number",
          value: obj.valor
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: "Salvar",
          handler: data => {
            var compra = <CompraModel>data;
            compra.data = Date();
            if(novo){
              var r = this.dbcompras.add(compra)
              console.log(r);
            }
            else{
              compra.key = obj.key;
              this.dbcompras.edit(compra);
            }
          }
        }
      ]
    })
    prompt.present();
  }

  editCompra(obj: any){
    this.addCompra(obj);
  }

  removeCompra(obj: any){
    this.dbcompras.remove(obj);
  }

  hidden(obj: any){
    console.log(obj.show)
    obj.show = !obj.show;
    console.log(obj.show)
  }
}
