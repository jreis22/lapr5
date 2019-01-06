import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EntregaService} from "../../gestor/entregas/entrega.service";
import { Itinerario } from '../../gestor/entregas/itinerario';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {

  itinerarios: Itinerario[];
  displayedColumns: string[] = ['fabrica', 'itinerario', 'custo', 'data'];

  constructor(private entregaService: EntregaService) { }

  ngOnInit() {
    this.getItinerarios();
  }

  private getItinerarios(): void {

    this.entregaService.getItinerarios()
    .subscribe(itinerarios => this.itinerarios = itinerarios);
  }
  
}