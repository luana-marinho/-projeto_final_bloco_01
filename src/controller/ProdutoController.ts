import { Produto } from "../model/Produto";
import { colors } from "../../Colors";
import { ProdutoRepository } from "../repository/ProdutosRepository";
import { Makes } from "../model/Makes";
import { Acessorios} from "../model/Acessorios";
import { Perfumes } from "../model/Perfumes";

export class ProdutoController implements ProdutoRepository{

    private listar: Array<Produto> = new Array<Produto>();

    public id: number = 0;
    
    cadastrarProduto(id: Produto): void {
        this.listar.push(id);
        console.log(colors.fg.greenstrong);
        console.log("Produto cadastrado com sucesso!")
        colors.reset
    }
    
    listarTodos(): void {
        for (let listar of this.listar) {
            listar.visualizar();
    }
}
    consultarPorID(id: number): void {
        let buscarNoArray = this.buscarNoArray(id);

        if (buscarNoArray !== null){
            buscarNoArray.visualizar();
        }else{
            console.log("Produto não encontrado");
    }
}
    atualizar(nome: Produto): void {
        this.listar.forEach(function verificarProduto (listar) {
            if (listar.id === nome.id){
                listar.nome= nome.nome 
                listar.preco= nome.preco
                listar.tipo = nome.tipo
                console.log(colors.fg.greenstrong);
                console.log(`Produto atualizado com sucesso!`)
                colors.reset;
            }
            
        }
        )
    }
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listar.splice(this.listar.indexOf(buscaProduto), 1);
            console.log(colors.fg.greenstrong);
            console.log(`\nProduto excluido com sucesso`);
            colors.reset;
        }
        else {
            console.log(colors.fg.redstrong);
            console.log("Produto não foi encontrado");
            colors.reset;
        }
    }

    public gerarId(): number {
        return ++this.id
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produtos of this.listar) {
            if (produtos.id == id)
                return produtos;
        }
        return null;
    }

    
}