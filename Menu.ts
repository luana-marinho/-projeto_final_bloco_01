import readlinesync = require("readline-sync");
import { colors } from "./Colors";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Perfumes } from "./src/model/Perfumes";
import { Makes } from "./src/model/Makes";
import { Acessorios } from "./src/model/Acessorios";

export function main() {

    let opcao, id, tipo, preco: number;
    let make, acessorio, fragrancia: string;
    let nome, cor, corAcessorio: string;

    const tipoProduto = ['Maquiagem', 'Acessorios', 'Perfume'];

    const produtos: ProdutoController = new ProdutoController();

    produtos.cadastrarProduto(new Makes(produtos.gerarId(), "Blush", 1, 60, "Rosa"));
    produtos.cadastrarProduto(new Acessorios(produtos.gerarId(), "Colar", 2, 50, "Dourado"));
    produtos.cadastrarProduto(new Perfumes(produtos.gerarId(), "Parfum", 3, 100, "Elixir Dourado e Morango"));


    while (true) {

        console.log(colors.fg.magenta);
        console.log("|*****************************************************|");
        console.log("|                BEM MULHER MAKES                     |");
        console.log("|*****************************************************|");
        console.log("|                                                     |");
        console.log("|            1 - Cadastrar Produto                    |");
        console.log("|            2 - Listar todos os Produtos             |");
        console.log("|            3 - Consultar Produto por ID             |");
        console.log("|            4 - Atualizar Produto                    |");
        console.log("|            5 - Deletar Produto                      |");
        console.log("|            6 - Sair                                 |");
        console.log("|                                                     |");
        console.log("|*****************************************************|");
        console.log("|____________Entre com a opção desejada:______________|");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
        console.log("\n-----------Programa encerrado! Volte Sempre!----------");
            sobre();
            process.exit(0);
        }
        switch (opcao) {
            case 1:

                console.log("\n\nCadastrando Produto..\n\n");

                console.log('Digite o Tipo do Produto: ')
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                console.log('Digite o nome do produto: ')
                nome = readlinesync.question("")

                console.log('Digite o valor do produto: ')
                preco = readlinesync.questionFloat("")



                switch (tipo) {
                    case 1:
                        console.log(`Informe a cor da Maquiagem: `)
                        cor = readlinesync.question("")

                        produtos.cadastrarProduto(new Makes(produtos.gerarId(), nome, tipo, preco, cor))
                        break;

                    case 2:
                        console.log(`Informe a cor do Acessorio: `)
                        corAcessorio = readlinesync.question("")

                        produtos.cadastrarProduto(new Acessorios(produtos.gerarId(), nome, tipo, preco, corAcessorio))
                        break;

                    case 3:
                        console.log(`Informe a Fragrancia do Perfume: `)
                        fragrancia = readlinesync.question("")

                        produtos.cadastrarProduto(new Perfumes(produtos.gerarId(), nome, tipo, preco, fragrancia))
                        break;
                        colors.reset
                }

                break;
            case 2:

                console.log("\n\nListando Produtos: \n\n");
                produtos.listarTodos();
                keyPress();
                break;
            case 3:

                console.log("\n\nConsultando Produtos - por ID...\n\n");

                console.log("Digite o Id do Produto: ")
                id = readlinesync.questionInt("");

                produtos.consultarPorID(id);

                keyPress();
                break;
            case 4:

                console.log("\n\nAtualizando Produto.. \n\n");

                console.log('Digite o id do Produto Desejado: ')
                id = readlinesync.questionInt("")

                if (produtos.buscarNoArray(id) != null) {

                    console.log("\n\nAtualizando Produto..\n\n");

                    console.log('Digite o Tipo do Produto: ')
                    tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                    console.log('Digite o nome do produto: ')
                    nome = readlinesync.question("")


                    console.log('Digite o valor do produto: ')
                    preco = readlinesync.questionFloat("")


                    switch (tipo) {
                        case 1:
                            console.log(`Informe a cor da Maquiagem: `)
                            cor = readlinesync.question("")

                            produtos.atualizar(new Makes(id, nome, tipo, preco, cor))
                            break;

                        case 2:
                            console.log(`Informe a cor do Acessorio: `)
                            corAcessorio = readlinesync.question("")

                            produtos.atualizar(new Acessorios(id, nome, tipo, preco, corAcessorio))
                            break;

                        case 3:
                            console.log(`Informe a Fragrancia do Perfume: `)
                            fragrancia = readlinesync.question("")

                            produtos.atualizar(new Perfumes(id, nome, tipo, preco, fragrancia))
                            break;   
                    }

                }
                else{
                    console.log("Produto nao encontrado!")
                }

                break;

            case 5:
                console.log("\n\nDeletando Produto..\n\n");

                console.log("Digite o id do Produto: ")
                id = readlinesync.questionInt("");

                produtos.deletar(id);
                keyPress();
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n|*****************************************************|");
    console.log("|  Projeto Desenvolvido por: Luana G. M. de Oliveira  |");
    console.log("|   Generation Brasil-luana.oliveira@generation.org   |");
    console.log("|   https://github.com/luana-marinho/conta_bancaria   |");
    console.log("|*****************************************************|", colors.reset);
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main()
