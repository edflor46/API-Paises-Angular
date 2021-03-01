import { Component } from '@angular/core';
import { Country } from '../../interface/interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */
  termino: string = '';

  error: boolean = false;
  mostrarSugerencia: boolean = false;

  paises: Country[] = [];

  /* -------------------------------------------------------------------------- */
  /*                                 constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(private paisService: PaisService) {}

  /* -------------------------------------------------------------------------- */
  /*                                   Buscar                                   */
  /* -------------------------------------------------------------------------- */

  buscar(termino: string) {
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe(
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
}
