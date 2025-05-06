import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from './produtoservice';

@Component({
  selector: 'app-root',
  // Para componentes standalone (Angular 14+), use "imports"
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula01-view';

  // Objeto para cadastro/edição do produto
  produto: any = { id: null, nome: '', preco: 0 };

  // Lista de produtos cadastrados
  produtos: any[] = [];

  // Controle do modal (popup)
  showModal = false;

  // Indica se estamos em modo de edição
  editing = false;

  // Índice do produto que está sendo editado (se aplicável)
  editingIndex: number | null = null;

  constructor(private produtoService: ProdutoService) {
    // Listagem inicial dos produtos (opcional)
    this.listar();
  }

  /**
   * Carrega os produtos a partir do serviço.
   */
  listar(): void {
    this.produtoService.get().subscribe({
      next: (response: any[]) => {
        this.produtos = response;
      },
      error: (error: any) => {
        console.error('Erro ao listar produtos:', error);
      }
    });
  }

  /**
   * Salva ou atualiza o produto. Atualiza a lista automaticamente.
   */
  salvar(): void {
    if (this.editing && this.editingIndex !== null) {
      // Atualiza o produto na lista local
      this.produtos[this.editingIndex] = { ...this.produto };

      // Chamada para o serviço atualizar o produto
      this.produtoService.updateProduto(this.produto).subscribe({
        next: (response: any) => {
          console.log('Produto atualizado:', response);
        },
        error: (error: any) => {
          console.error('Erro ao atualizar produto:', error);
        }
      });
    } else {
      // Chamada para o serviço salvar o novo produto
      this.produtoService.salvarProduto(this.produto).subscribe({
        next: (response: any) => {
          console.log('Produto salvo:', response);
          // Adiciona o produto à lista automaticamente
          this.produtos.push(response);
        },
        error: (error: any) => {
          console.error('Erro ao salvar produto:', error);
        }
      });
    }
    // Fecha o modal e reseta variáveis de controle
    this.closeModal();
  }

  /**
   * Exclui um produto da lista e chama o serviço para excluir.
   * @param index Índice do produto na lista.
   */
  excluir(index: number): void {
    const produtoParaExcluir = this.produtos[index];
    this.produtoService.excluirProduto(produtoParaExcluir).subscribe({
      next: () => {
        this.produtos.splice(index, 1);
        console.log('Produto excluído com sucesso.');
      },
      error: (error: any) => {
        console.error('Erro ao excluir produto:', error);
      }
    });
  }

  /**
   * Abre o modal para cadastrar um novo produto.
   */
  openModal(): void {
    this.produto = { id: null, nome: '', preco: 0 };
    this.editing = false;
    this.editingIndex = null;
    this.showModal = true;
  }

  /**
   * Abre o modal para editar um produto existente.
   * @param produto Produto selecionado.
   * @param index Índice do produto na lista.
   */
  openEditModal(produto: any, index: number): void {
    // Cria uma cópia para não alterar a lista antes de salvar
    this.produto = { ...produto };
    this.editing = true;
    this.editingIndex = index;
    this.showModal = true;
  }

  /**
   * Fecha o modal e reseta as variáveis.
   */
  closeModal(): void {
    this.showModal = false;
    this.editing = false;
    this.editingIndex = null;
    this.produto = { id: null, nome: '', preco: 0 };
  }
}
