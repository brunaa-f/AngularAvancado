import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";   //todo component precisa desse casa, importa ele dentro do nfmodule/imports
import { RouterModule } from "@angular/router";   //navegação

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [     //componentes desse módulo
        MenuComponent,
        HomeComponent,
        FooterComponent,
    ], 
    imports: [ //caso importe outros módulos
        CommonModule,
        RouterModule
    ], 
    exports: [
        MenuComponent,      //permitir o acesso dos components do modulo para o mundo externo
        HomeComponent,
        FooterComponent,
    ]
})
export class NavegacaoModule{

}