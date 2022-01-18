import { NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";
registerLocaleData(localePt);
import localePt from '@angular/common/locales/pt';
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count.components";

@NgModule({
    declarations:[
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent
    ],
    imports:[
        //CommonModule é para ser tratado como um modulo
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: []
})  
export class ProdutoModule{}