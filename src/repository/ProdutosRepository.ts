import { Produto } from "../model/Produto";

export interface ProdutoRepository {
    
    listarTodos(): void;
    consultarPorID(id: number): void;
    consultarPorNome(id: number): void;
    cadastrarProduto(id: Produto): void;
    atualizar(nome: Produto): void;
    deletar(nome: Produto): void;
}