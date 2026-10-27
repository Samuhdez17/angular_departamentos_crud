import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { DepartamentosService } from '../../services/departamentos.service';

@Component({
  selector: 'app-home',
  standalone: false,
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home implements OnInit {
  departamentos!: Array<Departamento>

  constructor(
    private _cdr: ChangeDetectorRef,
    private _departamentosService: DepartamentosService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.departamentos = await this._departamentosService.getDepartamentos()
    this._cdr.detectChanges()
  }
}
