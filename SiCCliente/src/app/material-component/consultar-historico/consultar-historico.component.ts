import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { HistoricoMaterialService } from '../../gestor/historico/historico-material.service';
import { HistoricoPrecosMaterial } from '../../gestor/historico/historico-precos-material';
import { Material } from '../../gestor/material/material';
import { MaterialService } from '../../gestor/material/material.service';

@Component({
  selector: 'app-consultar-historico',
  templateUrl: './consultar-historico.component.html',
  styleUrls: ['./consultar-historico.component.css']
})

export class ConsultarHistoricoComponent implements OnInit {

  flagServer: boolean = false;

  constructor(private historicoMaterial: HistoricoMaterialService, private materialService: MaterialService) { }

  displayedColumns: string[] = ['nomeMaterial', 'preco', 'dataAlterado', 'horaAlterado'];
  dataSource = new MatTableDataSource<{ nomeMaterial: string, preco: number, dataAlterado: string, horaAlterado: string }>();
  statusMessage: string;
  arrayPrecos: Array<String>[];
  rows: Array<{ nomeMaterial: string, preco: number, dataAlterado: string, horaAlterado: string }> = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getMateriais();
    this.dataSource.paginator = this.paginator;
  }

  private getHistoricoPrecosMaterial(listaMateriais: Material[]): void {
    this.historicoMaterial.getHistoricoPrecosMaterial().subscribe(listaPrecosTodosMateriais => {
      listaMateriais.forEach(material => {
        var idMaterialVer = material.id;
        var nomeMaterial = material.tipo;
        var listaPrecosMaterial = listaPrecosTodosMateriais.filter(m => m.idMaterial == idMaterialVer);

        if (listaPrecosMaterial.length > 0) {
          for (let i = 0; i < listaPrecosMaterial.length; i++) {
            const materialPreco = listaPrecosMaterial[i];
            var parts = materialPreco.dataRegisto.split('T');
            var data = parts[0];
            var time = parts[1];
            if (i == 0) {
              this.rows.push({ nomeMaterial: nomeMaterial , preco: materialPreco.precoBase, dataAlterado: data, horaAlterado: time });
            } else {
              this.rows.push({ nomeMaterial: "", preco: materialPreco.precoBase, dataAlterado: data, horaAlterado: time });
            }
          }
        }
      });
      this.dataSource.data = this.rows;
    },
      _ => { this.statusMessage = "Error: Service Unavailable"; });
  }

  // FUNCTIONS DE BDDAD

  private getMateriais(): void {
    this.materialService.getMateriais().subscribe(listaMateriais => {
      this.getHistoricoPrecosMaterial(listaMateriais);
    },
      _ => { 
        this.flagServer=true;
        this.statusMessage = "Error: Service Unavailable"; });
  }
}
