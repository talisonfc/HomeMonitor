import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ProdutoModel }  from '../../model/produto.model'
import { DatabaseProvider } from '../../providers/database/database'
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { ConfigProdutoPage } from '../config-produto/config-produto'
import { CategoriaModel } from '../../model/categoria.model';
import { CategoriaProvider } from '../../providers/categoria/categoria';
import { ProdutoProvider } from '../../providers/produto/produto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos$: Observable<ProdutoModel[]>;
  categorias$: Observable<CategoriaModel[]>;
  search: string;

  constructor(private dbprodutos: ProdutoProvider<ProdutoModel[]>,
    private dbcategorias: CategoriaProvider<CategoriaModel[]>,
    public navCtrl: NavController,
    public alert: AlertController) {
      
    this.produtos$ = this.dbprodutos.
    get('alimentacao')
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    })

    this.categorias$ = this.dbcategorias.
    get('categorias')
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    })
  }

  addProduto(obj: any){
    this.navCtrl.push(ConfigProdutoPage, {obj: this.produtos$})
  }

  removeProduto(obj: any){
    this.dbprodutos.remove(obj);
  }

  editProduto(obj: any, titulo: string, field: string, placeholder: string, tipo: string, value: any){
    let prompt = this.alert.create({
      title: titulo,
      inputs: [
        {
          name: field,
          placeholder: placeholder,
          value: value,
          type: tipo
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: data => {
            obj[field] = data[field];
            this.dbprodutos.edit(obj);
          }
        }
      ]
    })

    prompt.present();
  }

  editPreco(obj: any, index: number){
    let alert = this.alert.create({
      title: "Editar preço",
      inputs: [
        {
          type: "number",
          label: "Preço",
          name: "valor",
          value: obj.custo[index].valor
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: data=>{
            obj.custo[index].valor = data.valor;
            this.dbprodutos.edit(obj);
          }
        }
      ]
    })
    alert.present();
  }

  onInput(event: any){
    //console.log(this.search.length)

    if(this.search.length){
      this.produtos$.forEach(e => {
        e.forEach(el => {
          if(el.nome.toLowerCase().search(this.search) === 0){
            console.log(el.nome)
            this.hidden(el)
          }
          else{
            el.show = true;
          }
        })
      })
    }
  }

  hidden(obj: any){
    obj.show = !obj.show;
    this.dbprodutos.edit(obj);
  }
}
