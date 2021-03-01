import { Component } from '@angular/core';
import { Country } from '../../interface/interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  termino: string = '';

  error: boolean = false;
  mostrarSugerencia: boolean = false;

  paises: Country[] = [];
  pais: Country[] = [];
  sugerencia: Country[] = [];

  /* -------------------------------------------------------------------------- */
  /*                                 constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(private paisService: PaisService) {}

  /* -------------------------------------------------------------------------- */
  /*                                   Buscar                                   */
  /* -------------------------------------------------------------------------- */

  buscar(termino: string) {
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(
      (resp) => {
        console.log(resp);

        this.paises = resp;
      },
      (err) => {
        this.error = true;
        this.paises = [];
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Sugerencias                                */
  /* -------------------------------------------------------------------------- */

  sugerencias(termino: string) {
    this.error = false;
    this.termino = termino;
    this.mostrarSugerencia = true;

    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.sugerencia = paises.splice(0, 7)),

      (err) => (this.sugerencia = [])
    );
  }
                                  
}
