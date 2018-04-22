import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { CategoriaModel } from '../../model/categoria.model'
import { Observable } from 'rxjs/Observable';
import { CategoriaProvider } from '../../providers/categoria/categoria';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias$: Observable<CategoriaModel[]>

  constructor(private dbcategorias: CategoriaProvider<CategoriaModel[]>,
    private alert: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {

      this.categorias$ = this.dbcategorias
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
              this.dbcategorias.add(categoria)
            }
            else{
              categoria.key = obj.key;
              this.dbcategorias.edit(categoria);
            }
          }
        }
      ]
    })
    prompt.present();
  }

  removeCategoria(obj: any){
    this.dbcategorias.remove(obj);
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
