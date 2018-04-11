import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { CategoriaModel } from '../../model/categoria.model'
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias$: Observable<CategoriaModel[]>

  constructor(private db: DatabaseProvider<CategoriaModel[]>,
    private alert: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {

      this.categorias$ = this.db
      .get('categorias')
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  addCategoria(obj: any){
    var novo = false
    if(obj === undefined){
      obj = new CategoriaModel();
      novo = true;
    }
    let prompt = this.alert.create({
      title: 'Adicionar categoria',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome',
          value: obj.nome
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: data =>{
            var categoria = <CategoriaModel>data;

            if(novo){
              this.db.add(categoria)
            }
            else{
              categoria.key = obj.key;
              this.db.edit(categoria);
            }
          }
        }
      ]
    })
    prompt.present();
  }

  removeCategoria(obj: any){
    this.db.remove(obj);
  }

  editCategoria(obj: any){
    this.addCategoria(obj);
  }

  hidden(obj: any){
    console.log(obj.show)
    obj.show = !obj.show;
    console.log(obj.show)
  }

}
