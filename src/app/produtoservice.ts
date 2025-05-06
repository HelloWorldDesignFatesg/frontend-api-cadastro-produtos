import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private baseUrl = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) {}

  // Método para salvar um novo produto (POST)
  salvarProduto(produto: any): Observable<any> {
    return this.http.post(this.baseUrl, produto);
  }

  // Método para obter a lista de produtos (GET)
  get(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Método para atualizar um produto existente (PUT)
  updateProduto(produto: any): Observable<any> {
    // Presume-se que o produto possua um campo "id" para identificar qual item atualizar.
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.put(url, produto);
  }

  // Método para excluir um produto (DELETE)
  excluirProduto(produto: any): Observable<any> {
    // Presume-se que o produto possua um campo "id" para identificar qual item excluir.
    const url = `${this.baseUrl}/${produto.id}`;
    return this.http.delete(url);
  }
}
