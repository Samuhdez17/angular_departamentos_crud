import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Departamento } from '../models/Departamento';
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
}