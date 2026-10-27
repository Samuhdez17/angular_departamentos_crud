import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class DepartamentosService {
    apiDepas = environment.apiDepartamentos

    constructor(
        private _http: HttpClient,
    ) {}

    async getDepartamentos(): Promise<Departamento[]> {
        let request = 'api/departamentos/'

        return firstValueFrom(this._http.get<Departamento[]>(this.apiDepas + request))
    }

    async postDepartamento(depa: Departamento): Promise<any> {
        // Convertimos de ob a json
        let body = JSON.stringify(depa)
        
        // Creamos header para el type
        let header = new HttpHeaders()
        header = header.set('Content-Type', 'application/json')
        
        let request = 'api/departamentos/'

        return firstValueFrom(
            this._http.post(this.apiDepas + request, body, { headers: header })
        )
    }
}