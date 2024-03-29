webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriaProvider = /** @class */ (function () {
    function CategoriaProvider(db) {
        this.db = db;
    }
    CategoriaProvider.prototype.get = function (key) {
        this.key = key;
        this.ref = this.db.list(key);
        return this.ref;
    };
    CategoriaProvider.prototype.add = function (obj) {
        return this.ref.push(obj);
    };
    CategoriaProvider.prototype.edit = function (obj) {
        return this.ref.update(obj.key, obj);
    };
    CategoriaProvider.prototype.remove = function (obj) {
        return this.ref.remove(obj.key);
    };
    CategoriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CategoriaProvider);
    return CategoriaProvider;
}());

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdutoProvider = /** @class */ (function () {
    function ProdutoProvider(db) {
        this.db = db;
    }
    ProdutoProvider.prototype.get = function (key) {
        this.key = key;
        this.ref = this.db.list(key);
        return this.ref;
    };
    ProdutoProvider.prototype.add = function (obj) {
        return this.ref.push(obj);
    };
    ProdutoProvider.prototype.edit = function (obj) {
        return this.ref.update(obj.key, obj);
    };
    ProdutoProvider.prototype.remove = function (obj) {
        return this.ref.remove(obj.key);
    };
    ProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProdutoProvider);
    return ProdutoProvider;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_categoria_model__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categoria_categoria__ = __webpack_require__(104);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriasPage = /** @class */ (function () {
    function CategoriasPage(dbcategorias, alert, navCtrl, navParams) {
        this.dbcategorias = dbcategorias;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.categorias$ = this.dbcategorias
            .get('categorias')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    CategoriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriasPage');
    };
    CategoriasPage.prototype.addCategoria = function (obj) {
        var _this = this;
        var novo = false;
        if (obj === undefined) {
            obj = new __WEBPACK_IMPORTED_MODULE_3__model_categoria_model__["a" /* CategoriaModel */]();
            novo = true;
        }
        var prompt = this.alert.create({
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
                    handler: function (data) {
                        var categoria = data;
                        if (novo) {
                            _this.dbcategorias.add(categoria);
                        }
                        else {
                            categoria.key = obj.key;
                            _this.dbcategorias.edit(categoria);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    CategoriasPage.prototype.removeCategoria = function (obj) {
        this.dbcategorias.remove(obj);
    };
    CategoriasPage.prototype.editCategoria = function (obj) {
        this.addCategoria(obj);
    };
    CategoriasPage.prototype.hidden = function (obj) {
        console.log(obj.show);
        obj.show = !obj.show;
        console.log(obj.show);
    };
    CategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorias',template:/*ion-inline-start:"/home/fotonica/Documents/Projects/home/src/pages/categorias/categorias.html"*/'<ion-header>\n  <ion-navbar class="header-white">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Categorias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-fab bottom right>\n    <button (click)="addCategoria(undefined)" ion-fab mini><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n  <ion-card *ngFor="let l of categorias$ | async">\n    <ion-card-header>\n      <ion-row>\n        <ion-col>\n          <button (click)="hidden(l)" ion-button clear>\n            <ion-icon name="book"></ion-icon> {{l.nome}}\n          </button>\n        </ion-col>\n        \n        <ion-col>\n          <ion-buttons right>\n            <button ion-button clear (click)="editCategoria(l)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n            <button ion-button clear (click)="removeCategoria(l)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n  </ion-card>\n\n</ion-content>\n  '/*ion-inline-end:"/home/fotonica/Documents/Projects/home/src/pages/categorias/categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_categoria_categoria__["a" /* CategoriaProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CategoriasPage);
    return CategoriasPage;
}());

//# sourceMappingURL=categorias.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_compra_model__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_compra_compra__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_produto_produto__ = __webpack_require__(115);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComprasPage = /** @class */ (function () {
    function ComprasPage(dbcompras, dbprodutos, navCtrl, navParams, alert) {
        var _this = this;
        this.dbcompras = dbcompras;
        this.dbprodutos = dbprodutos;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.lista = new Array();
        this.option = "historico";
        this.compras$ = this.dbcompras
            .get('compras')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.rol$ = this.dbprodutos
            .get('alimentacao')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.rol$.subscribe(function (data) {
            data.forEach(function (el) {
                if (el.qtn < el.qtn_min) {
                    _this.lista.push(el);
                }
            });
            //this.lista.push()
        });
    }
    ComprasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComprasPage');
    };
    ComprasPage.prototype.addCompra = function (obj) {
        var _this = this;
        var novo = false;
        if (obj === undefined) {
            obj = new __WEBPACK_IMPORTED_MODULE_2__model_compra_model__["a" /* CompraModel */]();
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
                    handler: function (data) {
                        var compra = data;
                        compra.data = Date();
                        if (novo) {
                            var r = _this.dbcompras.add(compra);
                            console.log(r);
                        }
                        else {
                            compra.key = obj.key;
                            _this.dbcompras.edit(compra);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ComprasPage.prototype.editCompra = function (obj) {
        this.addCompra(obj);
    };
    ComprasPage.prototype.removeCompra = function (obj) {
        this.dbcompras.remove(obj);
    };
    ComprasPage.prototype.hidden = function (obj) {
        console.log(obj.show);
        obj.show = !obj.show;
        console.log(obj.show);
    };
    ComprasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compras',template:/*ion-inline-start:"/home/fotonica/Documents/Projects/home/src/pages/compras/compras.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Compras</ion-title>\n  </ion-navbar>\n\n  <div>\n    <ion-segment [(ngModel)]="option">\n      <ion-segment-button value="lista">\n        Lista\n      </ion-segment-button>\n      <ion-segment-button value="historico">\n        Histórico\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content>\n\n  <div [ngSwitch]="option">\n    <div *ngSwitchCase="\'historico\'">\n      <ion-card *ngFor="let c of compras$ | async" [hidden]="c.show">\n        <ion-card-header>\n          <ion-row>\n            <ion-col>\n              <button (click)="hidden(c)" ion-button clear>\n                <ion-icon name="book"></ion-icon> {{c.nome}}\n              </button>\n            </ion-col>\n            \n            <ion-col>\n              <ion-buttons right>\n                <button ion-button clear (click)="editCompra(c)">\n                  <ion-icon name="create"></ion-icon>\n                </button>\n                <button ion-button clear (click)="removeCompra(c)">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n    \n        <ion-card-content>\n          <button ion-button clear>\n            {{c.valor | format}}\n          </button>\n          <button ion-button clear>\n            Data: {{c.data | date}}\n          </button>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-fab bottom right>\n        <button (click)="addCompra(undefined)" ion-fab mini><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n    </div>\n  \n\n    <div *ngSwitchCase="\'lista\'">\n      <ion-card *ngFor="let p of lista">\n        <ion-card-header>\n          <ion-row>\n            <ion-col col-10>\n              <button ion-button clear>{{p.nome}}</button>\n            </ion-col>\n            <ion-col col-2>\n              <button ion-button clear>{{p.qtn_min-p.qtn}}</button>\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n      </ion-card>\n    </div>\n\n  </div>\n\n  \n</ion-content>\n'/*ion-inline-end:"/home/fotonica/Documents/Projects/home/src/pages/compras/compras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_compra_compra__["a" /* CompraProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_produto_produto__["a" /* ProdutoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], ComprasPage);
    return ComprasPage;
}());

//# sourceMappingURL=compras.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_produto_model__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(241);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfigProdutoPage = /** @class */ (function () {
    function ConfigProdutoPage(barcodeScanner, db1, db2, db3, navCtrl, navParams) {
        this.barcodeScanner = barcodeScanner;
        this.db1 = db1;
        this.db2 = db2;
        this.db3 = db3;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produto = new __WEBPACK_IMPORTED_MODULE_3__model_produto_model__["b" /* ProdutoModel */]();
        this.produto.custo = new Array();
        this.custo = new __WEBPACK_IMPORTED_MODULE_3__model_produto_model__["a" /* Custo */]();
        this.lojas$ = this.db1
            .get('lojas')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.categorias$ = this.db2
            .get('categorias')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.produtos$ = this.db3.
            get('alimentacao')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    ConfigProdutoPage.prototype.ionViewDidLoad = function () {
    };
    ConfigProdutoPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    ConfigProdutoPage.prototype.salvar = function (obj) {
        this.produto.custo.push(this.custo);
        //console.log(this.produto)
        this.db3.add(obj);
        this.navCtrl.pop();
    };
    ConfigProdutoPage.prototype.scan = function () {
        var _this = this;
        //console.log("teste scanner");
        this.barcodeScanner.scan({
            orientation: 'landscape'
        }).then(function (barcodeData) {
            _this.produto.codigo = barcodeData.text;
        }).catch(function (err) {
            console.error("[BARCODE SCAN] - " + err);
        });
    };
    ConfigProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config-produto',template:/*ion-inline-start:"/home/fotonica/Documents/Projects/home/src/pages/config-produto/config-produto.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Produto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-10>\n          <ion-item>\n            <ion-label floating>Código de Barra</ion-label>\n            <ion-input [(ngModel)]="produto.codigo" type="text"></ion-input>\n          </ion-item>        \n        </ion-col>\n\n        <ion-col col-2>\n          <button (click)="scan()" ion-button clear style="height: 100%">\n            <ion-icon name="barcode"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      \n      <ion-item>\n        <ion-label floating>Nome</ion-label>\n        <ion-input [(ngModel)]="produto.nome" type="text"></ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Estoque</ion-label>\n            <ion-input [(ngModel)]="produto.qtn" type="number"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Mínima</ion-label>\n            <ion-input [(ngModel)]="produto.qtn_min" type="number"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      \n\n      \n\n      <ion-item>\n        <ion-label floating>Valor</ion-label>\n        <ion-input [(ngModel)]="custo.valor" type="number"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Loja</ion-label>\n        <ion-select [(ngModel)]="custo.loja">\n          <ion-option *ngFor="let l of lojas$ | async">{{l.nome}}</ion-option>\n        </ion-select>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label floating>Categotia</ion-label>\n        <ion-select [(ngModel)]="produto.categoria">\n          <ion-option *ngFor="let c of categorias$ | async" value="{{c.nome}}">{{c.nome}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-buttons class="footer">\n    <ion-row>\n      <ion-col>\n        <button (click)="cancelar()" ion-button full clear>Cancelar</button> \n      </ion-col>\n      <ion-col>\n        <button (click)="salvar(produto)" ion-button full clear>Salvar</button>\n      </ion-col>\n    </ion-row>\n    \n  </ion-buttons>\n</ion-content>\n'/*ion-inline-end:"/home/fotonica/Documents/Projects/home/src/pages/config-produto/config-produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConfigProdutoPage);
    return ConfigProdutoPage;
}());

//# sourceMappingURL=config-produto.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_loja_model__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loja_loja__ = __webpack_require__(244);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LojasPage = /** @class */ (function () {
    function LojasPage(dblojas, alert, navCtrl, navParams) {
        this.dblojas = dblojas;
        this.alert = alert;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lojas$ = this.dblojas
            .get('lojas')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    LojasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LojasPage');
    };
    LojasPage.prototype.addLoja = function (obj) {
        var _this = this;
        var novo = false;
        if (obj === undefined) {
            obj = new __WEBPACK_IMPORTED_MODULE_3__model_loja_model__["a" /* LojaModel */]();
            novo = true;
        }
        var prompt = this.alert.create({
            title: 'Adicionar loja',
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
                    handler: function (data) {
                        var loja = data;
                        if (novo) {
                            _this.dblojas.add(loja);
                        }
                        else {
                            loja.key = obj.key;
                            _this.dblojas.edit(loja);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    LojasPage.prototype.removeLoja = function (obj) {
        this.dblojas.remove(obj);
    };
    LojasPage.prototype.editLoja = function (obj) {
        this.addLoja(obj);
    };
    LojasPage.prototype.hidden = function (obj) {
        console.log(obj.show);
        obj.show = !obj.show;
        console.log(obj.show);
    };
    LojasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lojas',template:/*ion-inline-start:"/home/fotonica/Documents/Projects/home/src/pages/lojas/lojas.html"*/'<ion-header>\n  <ion-navbar class="header-white">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lojas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-fab bottom right>\n    <button (click)="addLoja(undefined)" ion-fab mini><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n  <ion-card *ngFor="let l of lojas$ | async">\n    <ion-card-header>\n      <ion-row>\n        <ion-col>\n          <button (click)="hidden(l)" ion-button clear>\n            <ion-icon name="book"></ion-icon> {{l.nome}}\n          </button>\n        </ion-col>\n        \n        <ion-col>\n          <ion-buttons right>\n            <button ion-button clear (click)="editLoja(l)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n            <button ion-button clear (click)="removeLoja(l)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content [hidden]="!l.show">\n      <ion-row>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/fotonica/Documents/Projects/home/src/pages/lojas/lojas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_loja_loja__["a" /* LojaProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LojasPage);
    return LojasPage;
}());

//# sourceMappingURL=lojas.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReceitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceitasPage = /** @class */ (function () {
    function ReceitasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReceitasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceitasPage');
    };
    ReceitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receitas',template:/*ion-inline-start:"/home/fotonica/Documents/Projects/home/src/pages/receitas/receitas.html"*/'<ion-header>\n  <ion-navbar class="header-white">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Receita</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/home/fotonica/Documents/Projects/home/src/pages/receitas/receitas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReceitasPage);
    return ReceitasPage;
}());

//# sourceMappingURL=receitas.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatorioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RelatorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RelatorioPage = /** @class */ (function () {
    function RelatorioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RelatorioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RelatorioPage');
    };
    RelatorioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-relatorio',template:/*ion-inline-start:"/home/fotonica/Documents/Projects/home/src/pages/relatorio/relatorio.html"*/'<ion-header>\n  <ion-navbar class="header-white">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Relatório</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/fotonica/Documents/Projects/home/src/pages/relatorio/relatorio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RelatorioPage);
    return RelatorioPage;
}());

//# sourceMappingURL=relatorio.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/categorias/categorias.module": [
		451,
		5
	],
	"../pages/compras/compras.module": [
		452,
		4
	],
	"../pages/config-produto/config-produto.module": [
		453,
		3
	],
	"../pages/lojas/lojas.module": [
		454,
		2
	],
	"../pages/receitas/receitas.module": [
		455,
		1
	],
	"../pages/relatorio/relatorio.module": [
		456,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompraProvider = /** @class */ (function () {
    function CompraProvider(db) {
        this.db = db;
    }
    CompraProvider.prototype.get = function (key) {
        this.key = key;
        this.ref = this.db.list(key);
        return this.ref;
    };
    CompraProvider.prototype.add = function (obj) {
        return this.ref.push(obj);
    };
    CompraProvider.prototype.edit = function (obj) {
        return this.ref.update(obj.key, obj);
    };
    CompraProvider.prototype.remove = function (obj) {
        return this.ref.remove(obj.key);
    };
    CompraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CompraProvider);
    return CompraProvider;
}());

//# sourceMappingURL=compra.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(db) {
        this.db = db;
    }
    DatabaseProvider.prototype.get = function (key) {
        this.key = key;
        this.ref = this.db.list(key);
        return this.ref;
    };
    DatabaseProvider.prototype.add = function (obj) {
        return this.ref.push(obj);
    };
    DatabaseProvider.prototype.edit = function (obj) {
        return this.ref.update(obj.key, obj);
    };
    DatabaseProvider.prototype.remove = function (obj) {
        return this.ref.remove(obj.key);
    };
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LojaProvider = /** @class */ (function () {
    function LojaProvider(db) {
        this.db = db;
    }
    LojaProvider.prototype.get = function (key) {
        this.key = key;
        this.ref = this.db.list(key);
        return this.ref;
    };
    LojaProvider.prototype.add = function (obj) {
        return this.ref.push(obj);
    };
    LojaProvider.prototype.edit = function (obj) {
        return this.ref.update(obj.key, obj);
    };
    LojaProvider.prototype.remove = function (obj) {
        return this.ref.remove(obj.key);
    };
    LojaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LojaProvider);
    return LojaProvider;
}());

//# sourceMappingURL=loja.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_produto_config_produto__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_categoria_categoria__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_produto_produto__ = __webpack_require__(115);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(dbprodutos, dbcategorias, navCtrl, alert) {
        this.dbprodutos = dbprodutos;
        this.dbcategorias = dbcategorias;
        this.navCtrl = navCtrl;
        this.alert = alert;
        this.produtos$ = this.dbprodutos.
            get('alimentacao')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.categorias$ = this.dbcategorias.
            get('categorias')
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    HomePage.prototype.addProduto = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__config_produto_config_produto__["a" /* ConfigProdutoPage */], { obj: this.produtos$ });
    };
    HomePage.prototype.removeProduto = function (obj) {
        this.dbprodutos.remove(obj);
    };
    HomePage.prototype.editProduto = function (obj, titulo, field, placeholder, tipo, value) {
        var _this = this;
        var prompt = this.alert.create({
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
                    handler: function (data) {
                        obj[field] = data[field];
                        _this.dbprodutos.edit(obj);
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.editPreco = function (obj, index) {
        var _this = this;
        var alert = this.alert.create({
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
                    handler: function (data) {
                        obj.custo[index].valor = data.valor;
                        _this.dbprodutos.edit(obj);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.onInput = function (event) {
        //console.log(this.search.length)
        var _this = this;
        if (this.search.length) {
            this.produtos$.forEach(function (e) {
                e.forEach(function (el) {
                    if (el.nome.toLowerCase().search(_this.search) === 0) {
                        console.log(el.nome);
                        _this.hidden(el);
                    }
                    else {
                        el.show = true;
                    }
                });
            });
        }
    };
    HomePage.prototype.hidden = function (obj) {
        obj.show = !obj.show;
        this.dbprodutos.edit(obj);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/fotonica/Documents/Projects/home/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  \n    <ion-buttons right>\n      <button ion-button (click)="addProduto()">Novo produto</button>\n    </ion-buttons>\n  </ion-navbar>\n  \n  <ion-searchbar \n    [(ngModel)]="search"\n    (ionInput)="onInput($event)">\n  </ion-searchbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let p of produtos$ | async">\n    <ion-card-header>\n      <button (click)="hidden(p)" ion-button clear>\n        <ion-icon name="book"></ion-icon> {{p.nome}}\n      </button>\n      <!--button ion-button clear (click)="removeProduto(p)">Remover</button-->\n    </ion-card-header>\n\n    <ion-card-content [hidden]="!p.show">\n      <ion-row>\n        <ion-col *ngFor="let cst of p.custo; index as i">\n          <ion-label class="label-detail">{{cst.loja}}</ion-label>\n          <button ion-button clear block (click)="editPreco(p,i)">\n            {{cst.valor | format}}\n          </button>\n        </ion-col>\n\n        <ion-col>\n          <ion-label class="label-detail">Quantidade em estoque</ion-label>\n          <button ion-button clear block (click)="editProduto(p,\'Quantidade em estoque\', \'qtn\', \'Quantidade\', \'number\', p.qtn)">\n            {{p.qtn}}\n          </button>\n        </ion-col>\n\n        <ion-col>\n          <ion-label class="label-detail">Quantidade mínima</ion-label>\n          <button ion-button clear block (click)="editProduto(p,\'Quantidade mínima\', \'qtn_min\', \'Quantidade\', \'number\', p.qtn_min)">\n            {{p.qtn_min}}\n          </button>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-label class="label-detail">Categoria</ion-label>\n        <button ion-button block clear>\n          {{p.categoria}}\n        </button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/fotonica/Documents/Projects/home/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_produto_produto__["a" /* ProdutoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_categoria_categoria__["a" /* CategoriaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_compras_compras__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_receitas_receitas__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categorias_categorias__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_relatorio_relatorio__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_lojas_lojas__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_config_produto_config_produto__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__firebase_config__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_database_database__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_format_format__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_produto_produto__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_categoria_categoria__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_loja_loja__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_compra_compra__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { SplashScreen } from '@ionic-native/splash-screen';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_compras_compras__["a" /* ComprasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_categorias_categorias__["a" /* CategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_receitas_receitas__["a" /* ReceitasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_relatorio_relatorio__["a" /* RelatorioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lojas_lojas__["a" /* LojasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_format_format__["a" /* FormatPipe */],
                __WEBPACK_IMPORTED_MODULE_13__pages_config_produto_config_produto__["a" /* ConfigProdutoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/categorias/categorias.module#CategoriasPageModule', name: 'CategoriasPage', segment: 'categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compras/compras.module#ComprasPageModule', name: 'ComprasPage', segment: 'compras', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config-produto/config-produto.module#ConfigProdutoPageModule', name: 'ConfigProdutoPage', segment: 'config-produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lojas/lojas.module#LojasPageModule', name: 'LojasPage', segment: 'lojas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receitas/receitas.module#ReceitasPageModule', name: 'ReceitasPage', segment: 'receitas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/relatorio/relatorio.module#RelatorioPageModule', name: 'RelatorioPage', segment: 'relatorio', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__firebase_config__["a" /* CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_compras_compras__["a" /* ComprasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_categorias_categorias__["a" /* CategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_receitas_receitas__["a" /* ReceitasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_relatorio_relatorio__["a" /* RelatorioPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_lojas_lojas__["a" /* LojasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_config_produto_config_produto__["a" /* ConfigProdutoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                //SplashScreen,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_18__providers_produto_produto__["a" /* ProdutoProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_categoria_categoria__["a" /* CategoriaProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_loja_loja__["a" /* LojaProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_compra_compra__["a" /* CompraProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaModel; });
var CategoriaModel = /** @class */ (function () {
    function CategoriaModel() {
    }
    return CategoriaModel;
}());

//# sourceMappingURL=categoria.model.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraModel; });
var CompraModel = /** @class */ (function () {
    function CompraModel() {
    }
    return CompraModel;
}());

//# sourceMappingURL=compra.model.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Custo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProdutoModel; });
var Custo = /** @class */ (function () {
    function Custo() {
    }
    return Custo;
}());

var ProdutoModel = /** @class */ (function () {
    function ProdutoModel() {
    }
    return ProdutoModel;
}());

//# sourceMappingURL=produto.model.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LojaModel; });
var LojaModel = /** @class */ (function () {
    function LojaModel() {
    }
    return LojaModel;
}());

//# sourceMappingURL=loja.model.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_compras_compras__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_receitas_receitas__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_categorias_categorias__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_relatorio_relatorio__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lojas_lojas__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SplashScreen } from '@ionic-native/splash-screen';







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar
        /*public splashScreen: SplashScreen*/ ) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */] },
            { title: 'Compras', component: __WEBPACK_IMPORTED_MODULE_4__pages_compras_compras__["a" /* ComprasPage */] },
            { title: 'Receitas', component: __WEBPACK_IMPORTED_MODULE_5__pages_receitas_receitas__["a" /* ReceitasPage */] },
            { title: 'Categorias', component: __WEBPACK_IMPORTED_MODULE_6__pages_categorias_categorias__["a" /* CategoriasPage */] },
            { title: 'Relatorio', component: __WEBPACK_IMPORTED_MODULE_7__pages_relatorio_relatorio__["a" /* RelatorioPage */] },
            { title: 'Lojas', component: __WEBPACK_IMPORTED_MODULE_8__pages_lojas_lojas__["a" /* LojasPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            //this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__["timer"])(0).subscribe(function () {
                _this.showSplash = false;
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/fotonica/Documents/Projects/home/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n  <div class="spinner">\n    <div class="sk-cube-grid">\n      <div class="sk-cube sk-cube1"></div>\n      <div class="sk-cube sk-cube2"></div>\n      <div class="sk-cube sk-cube3"></div>\n      <div class="sk-cube sk-cube4"></div>\n      <div class="sk-cube sk-cube5"></div>\n      <div class="sk-cube sk-cube6"></div>\n      <div class="sk-cube sk-cube7"></div>\n      <div class="sk-cube sk-cube8"></div>\n      <div class="sk-cube sk-cube9"></div>\n    </div>\n  </div>\n</div>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/fotonica/Documents/Projects/home/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]
            /*public splashScreen: SplashScreen*/ ])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIG; });
var CONFIG = {
    apiKey: "AIzaSyAWfTQhmcowySljMMjTv6XCN4zrPJqrnCU",
    authDomain: "insumos-3a3ae.firebaseapp.com",
    databaseURL: "https://insumos-3a3ae.firebaseio.com",
    projectId: "insumos-3a3ae",
    storageBucket: "insumos-3a3ae.appspot.com",
    messagingSenderId: "505174977683"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FormatPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FormatPipe = /** @class */ (function () {
    function FormatPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var b = false;
        for (var i = 0; i < value.length; i++) {
            if (value[i] === ".")
                b = true;
        }
        if (!b) {
            return "R$ " + value.toLowerCase() + ".00";
        }
        return "R$ " + value.toLowerCase();
    };
    FormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'format',
        })
    ], FormatPipe);
    return FormatPipe;
}());

//# sourceMappingURL=format.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map