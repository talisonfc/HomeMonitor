import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { CompraModel } from '../../model/compra.model'
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {

  compras$: Observable<CompraModel[]>

  constructor(private db: DatabaseProvider<CompraModel[]>,
    public navCtrl: NavController, public navParams: NavParams,
    private alert: AlertController) {

      this.compras$ = this.db
      .get('compras')
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
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
            compra.data = new Date();
            console.log(compra)

            if(novo){
              this.db.add(compra)
            }
            else{
              compra.key = obj.key;
              this.db.edit(compra);
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
    this.db.remove(obj);
  }

  hidden(obj: any){
    console.log(obj.show)
    obj.show = !obj.show;
    console.log(obj.show)
  }
}
