import { Component, OnInit } from '@angular/core';
import { ObrasVigasDTO } from '../../models/DTO/ObrasVigasDTO.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado:ObrasVigasDTO[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
