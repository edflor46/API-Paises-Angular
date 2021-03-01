import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  /* -------------------------------------------------------------------------- */
  /*                                 Decoradores                                */
  /* -------------------------------------------------------------------------- */

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebouncer: EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string = '';

  debouncer: Subject<string> = new Subject();
  termino: string = '';


  /* -------------------------------------------------------------------------- */
  /*                                   OnInit                                   */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {

    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.onDebouncer.emit(value);
        console.log(value);

      })

  }

  /* -------------------------------------------------------------------------- */
  /*                                  Buscador                                  */
  /* -------------------------------------------------------------------------- */

  buscar() {
    this.onEnter.emit(this.termino);
    console.log(this.termino);
  }

  /* -------------------------------------------------------------------------- */
  /*                              Tecla presionada                              */
  /* -------------------------------------------------------------------------- */

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
