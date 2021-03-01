import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  /* -------------------------------------------------------------------------- */
  /*                                  Variables                                 */
  /* -------------------------------------------------------------------------- */

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  region: string = '';
  paises: Country[] = [];

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(private paisService: PaisService) {}

  /* -------------------------------------------------------------------------- */
  /*                                  Class CSS                                 */
  /* -------------------------------------------------------------------------- */
  getClassCss(region:string):string{
    return (region === this.region) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  /* -------------------------------------------------------------------------- */
  /*                               Mostrar region                               */
  /* -------------------------------------------------------------------------- */

  regionActiva(region: string) {
    if (region === this.region) {
      return;
    }

    this.region = region;
    this.paises = [];

    this.paisService
      .buscarRegion(region)
      .subscribe((paises) => (this.paises = paises));
  }
}
