import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Encomenda } from '../../cliente/encomenda/encomenda';
import { EstadoEncomenda } from '../../cliente/encomenda/estado-entrega';
import { EncomendaService } from "../../cliente/encomenda/encomenda.service";
import { EntregaService} from "../../gestor/entregas/entrega.service";

@Component({
  selector: 'app-gerir-encomendas',
  templateUrl: './gerir-encomendas.component.html',
  styleUrls: ['./gerir-encomendas.component.css']
})
export class GerirEncomendasComponent implements OnInit {

  //estadosEnc: EstadoEncomenda[] = this.getEstadosEncomenda();
  estadoSelecionado: EstadoEncomenda;
  encomendaSelecionada : Encomenda = new Encomenda();
  encomendas: Encomenda[];

  constructor(private encomendaService: EncomendaService,
    private entregaService: EntregaService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  this.getEncomendas();
  }

  private getEncomendas(){
    this.encomendaService.getEncomendas()
    .subscribe(encomendas => this.encomendas = encomendas);
  }
}
