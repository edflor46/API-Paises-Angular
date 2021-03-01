import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [],
})
export class PaisTablaComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                  Decorador                                 */
  /* -------------------------------------------------------------------------- */
  @Input() paises:Country[] = [];
  constructor() {}

  ngOnInit(): void {}
}
