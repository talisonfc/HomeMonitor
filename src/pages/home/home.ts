import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ProdutoModel }  from '../../model/produto.model'
import { DatabaseProvider } from '../../providers/database/database'
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { ConfigProdutoPage } from '../config-produto/config-produto'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos$: Observable<ProdutoModel[]>;
  search: string;

  constructor(private db: DatabaseProvider<ProdutoModel[]>,
    public navCtrl: NavController,
    public alert: AlertController) {
    this.produtos$ = this.db.
    get('alimentacao')
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    })

  }

  addProduto(obj: any){
    this.navCtrl.push(ConfigProdutoPage, {obj: this.produtos$})
    /*
    var novo = false
    if(obj === undefined){
      obj = new ProdutoModel();
      novo = true;
    }
    let prompt = this.alert.create({
      title: 'Novo Produto',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome',
          value: obj.nome
        },
        {
          name: "qtn",
          placeholder: "Quantidade",
          type: "number",
          value: obj.qtn
        },
        {
          name: "qtn_min",
          placeholder: "Minimo",
          type: "number",
          value: obj.qtn_min
        },
        {
          name: 'valor',
          placeholder: 'Valor',
          type: 'number',
          value: obj.valor
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log(data);
            var produto = <ProdutoModel>data;

            if(novo){
              this.db.add(produto)
            }
            else{
              produto.key = obj.key;
              this.db.edit(produto);
            }
              
          }
        }
      ]
    })

    prompt.present();

    */
  }

  removeProduto(obj: any){
    this.db.remove(obj);
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
            this.db.edit(obj);
              
          }
        }
      ]
    })

    prompt.present();
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
    console.log(obj.show)
    obj.show = !obj.show;
    console.log(obj.show)
  }
}
