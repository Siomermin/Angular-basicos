import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        // Los componentes que se van a utilizar
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        // Lo que se quiere hacer publico
        ListadoComponent
    ],
    imports: [
        // Modulos
        CommonModule
    ]
})
export class HeroesModule {}