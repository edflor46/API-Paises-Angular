import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  /* -------------------------------------------------------------------------- */
  /*                               Parametros API                               */
  /* -------------------------------------------------------------------------- */

  private API: string = 'https://restcountries.eu/rest/v2';

  get httParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */
  constructor(private http: HttpClient) {}

  /* -------------------------------------------------------------------------- */
  /*                                 Buscar pais                                */
  /* -------------------------------------------------------------------------- */
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.API}/name/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httParams});
  }

  /* -------------------------------------------------------------------------- */
  /*                               Buscar capital                               */
  /* -------------------------------------------------------------------------- */
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.API}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httParams});
  }

  /* -------------------------------------------------------------------------- */
  /*                                Buscar Region                               */
  /* -------------------------------------------------------------------------- */

  buscarRegion(termino: string): Observable<Country[]> {
    const url = `${this.API}/region/${termino}`;
    return this.http.get<Country[]>(url, {params:this.httParams});
  }

  /* -------------------------------------------------------------------------- */
  /*                                   getPais                                  */
  /* -------------------------------------------------------------------------- */

  getPais(id: string): Observable<Country> {
    const url = `${this.API}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

}
