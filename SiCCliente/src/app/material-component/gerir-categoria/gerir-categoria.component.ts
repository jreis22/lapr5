import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../gestor/categoria/categoria';
import { CategoriaService } from '../../gestor/categoria/categoria.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-gerir-categoria',
  templateUrl: './gerir-categoria.component.html',
  styleUrls: ['./gerir-categoria.component.css']
})
export class GerirCategoriaComponent implements OnInit {

  flagServer: boolean = false;

  statusMessage: string;

  allCategorias: Categoria[];
  flag = true;
  categoriaToEdit: Categoria;
  selectedCategoriaPaiId: number = 0;
  selectedCategoria: Categoria = null;
  categoriaDescricaoUpdate = "";


  constructor(private categoriaSrv: CategoriaService, public snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.getCategorias();
  }
  private getCategorias(): void {
    this.categoriaSrv.getCategorias().subscribe(data => {
      this.allCategorias = data;
    },
      error => {
        this.flagServer=true;
        console.log(error);
      });
  }
  addCategoriaHTML(descricao: string, categoriaPaiId: number): void {
    descricao = descricao.trim();
    if (!descricao) {
      this.snackBar.open("Erro!", "Insira uma descrição", { duration: 4000 });
      return;
    }
    if (!descricao) { return; }
    this.categoriaSrv.addCategoria({ descricao, categoriaPaiId } as Categoria)
      .subscribe(categoria => {
        this.allCategorias.push(categoria);
        this.snackBar.open("Sucesso!", "Categoria Adicionada", { duration: 4000 });
      },
        erro => {
          this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
          console.log(erro);
        });
  }

  selecionarCategoria(cat: Categoria) {
    this.categoriaDescricaoUpdate = cat.descricao;
    this.selectedCategoriaPaiId = cat.categoriaPaiId;
  }

  updateCategoriaHTML(): void {
    if (this.selectedCategoria == null) {
      this.snackBar.open("Erro!", "Selecione uma Categoria", { duration: 4000 });
      return;
    }

    let categoriaFinal = new Categoria;
    categoriaFinal.id = this.selectedCategoria.id;
    categoriaFinal.descricao = this.categoriaDescricaoUpdate.trim();
    categoriaFinal.categoriaPaiId=this.selectedCategoriaPaiId;
    if (!categoriaFinal.descricao) {
      this.snackBar.open("Erro!", "Insira uma descrição", { duration: 4000 });
      return;
    }

    if (categoriaFinal.id==categoriaFinal.categoriaPaiId) {
      this.snackBar.open("Erro!", "A Categoria Pai não pode ser a própria Categoria", { duration: 4000 });
      return;
    }

    this.categoriaSrv.updateCategoria(this.selectedCategoria.id, categoriaFinal)
      .subscribe(categoria => {
        this.snackBar.open("Sucesso!", "Categoria Editada", { duration: 4000 });
        this.getCategorias();
        this.categoriaDescricaoUpdate = '';
        this.selectedCategoria = null;

      },
        erro => {
          this.snackBar.open("Erro!", "Ocurreu um erro", { duration: 4000 });
          console.log(erro);
        });
  }

  deleteCategoria(): void {
    if (this.selectedCategoria == null) {
      this.snackBar.open("Erro!", "Selecione uma Categoria", { duration: 4000 });
      return;
    }

    this.categoriaSrv.deleteCategoria(this.selectedCategoria.id).subscribe(categoria => {
      this.snackBar.open("Sucesso!", "Categoria Eliminada", { duration: 4000 });
      this.getCategorias();
      this.categoriaDescricaoUpdate = '';
      this.selectedCategoria = null;
    },
      erro => {
        this.snackBar.open("Erro!", erro.error, { duration: 4000 });
        console.log(erro);
      });
  }

}
