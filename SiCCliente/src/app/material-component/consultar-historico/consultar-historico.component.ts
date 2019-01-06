import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HistoricoMaterialService } from '../../gestor/historico/historico-material.service';
import { HistoricoPrecosMaterial } from '../../gestor/historico/historico-precos-material';
import { Material } from '../../gestor/material/material';
import { MaterialService } from '../../gestor/material/material.service';
import { AcabamentoService } from '../../gestor/acabamento/acabamento.service';
import { Acabamento } from '../../gestor/acabamento/acabamento';

@Component({
  selector: 'app-consultar-historico',
  templateUrl: './consultar-historico.component.html',
  styleUrls: ['./consultar-historico.component.css']
})

export class ConsultarHistoricoComponent implements OnInit {

  flagServer: boolean = false;

  constructor(private historicoMaterial: HistoricoMaterialService,
    private materialService: MaterialService,
    private acabamentoService: AcabamentoService) { }

  displayedColumns: string[] = ['nomeMaterial', 'preco', 'nomeAcabamento', 'precoAcabamento', 'horaAlterado', 'dataAlterado'];
  dataSource = new MatTableDataSource<{ nomeMaterial: string, preco: number, nomeAcabamento: string, precoAcabamento: number, horaAlterado: string, dataAlterado: string }>();
  rows: Array<{ nomeMaterial: string, preco: number, nomeAcabamento: string, precoAcabamento: number, horaAlterado: string, dataAlterado: string }> = [];
  statusMessage: string;
  historicoMateriaisList: HistoricoPrecosMaterial[] = [];
  arrayPrecos: Array<String>[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getMateriais();
    this.dataSource.paginator = this.paginator;
  }

  private getHistoricoPrecosMaterial(listaMateriais: Material[], listaAcabamentos: Acabamento[]): void {
    this.historicoMaterial.getHistoricoPrecosMaterial().subscribe(listaPrecosTodosMateriais => {
      //Ordena por id Material
      listaPrecosTodosMateriais.sort(function (a, b) {
        return a.materialId - b.materialId;
      });

      var linhaAux: HistoricoPrecosMaterial = null;
      listaPrecosTodosMateriais.forEach(linha => {
        var nomeMaterial = "[MATERIAL APAGADO]";
        var nomeAcabamento = "[ACABAMENTO APAGADO]";
        //Material foi removido da bd
        listaMateriais.find(m => m.id == linha.materialId) ? nomeMaterial = listaMateriais.find(m => m.id == linha.materialId).tipo : nomeMaterial = "[MATERIAL APAGADO]";
        //Acabamento foi removido da bd
        listaAcabamentos.find(a => a.id == linha.acabamentoId) ? nomeAcabamento = listaAcabamentos.find(a => a.id == linha.acabamentoId).tipo : nomeAcabamento = "[ACABAMENTO APAGADO]";
        var parts = linha.dataRegisto.toString().split('T');
        var data = parts[0];
        var time = parts[1];
        if (linhaAux != null) {
          //Mesmo material que o anterior
          if (linhaAux.materialId == linha.materialId) {
            this.rows.push({ nomeMaterial: "", preco: linha.precoBase, nomeAcabamento: nomeAcabamento, precoAcabamento: linha.incrementoPreco, horaAlterado: time, dataAlterado: data });
          } else {
            //Outro Material
            this.rows.push({ nomeMaterial: nomeMaterial, preco: linha.precoBase, nomeAcabamento: nomeAcabamento, precoAcabamento: linha.incrementoPreco, horaAlterado: time, dataAlterado: data });
          }
        } else {
          // 1ª Linha
          this.rows.push({ nomeMaterial: nomeMaterial, preco: linha.precoBase, nomeAcabamento: nomeAcabamento, precoAcabamento: linha.incrementoPreco, horaAlterado: time, dataAlterado: data });
        }
        linhaAux = linha;
      });
      this.dataSource.data = this.rows;
    },
      _ => { this.statusMessage = "Error: Service Unavailable"; });
  }

  // FUNCTIONS DE BDDAD

  private getMateriais(): void {
    this.materialService.getMateriais().subscribe(listaMateriais => {
      this.getAcabamentos(listaMateriais);
    },
      _ => {
        this.flagServer = true;
        this.statusMessage = "Error: Service Unavailable";
      });
  }

  private getAcabamentos(listaMateriais): void {
    this.acabamentoService.getAcabamentos().subscribe(listaAcabamentos => {
      this.getHistoricoPrecosMaterial(listaMateriais, listaAcabamentos);
    });
  }

}
