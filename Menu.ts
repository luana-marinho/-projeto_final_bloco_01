import readlinesync = require("readline-sync");
import { colors } from "./Colors";

export function main() {

    let opcao, id, tipo, preco: number;
    // let nome, generico, fragrancia: string;

    //const tipoProduto = ['Maquiagem', 'Acessórios' 'Perfume'];

    //const produtos: ProdutoController = new ProdutoController();

    while (true) {

        console.log(colors.bg.magenta);
        console.log("*****************************************************");
        console.log("                BEM MULHER MAKES                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Consultar Produto por ID             ");
        console.log("            4 - Consultar Produto por Nome           ");
        console.log("            5 - Atualizar Produto                    ");
        console.log("            6 - Deletar Produto                      ");
        console.log("            7 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada:                          ");
        opcao = readlinesync.questionInt("");

        if (opcao == 7) {
            console.log("\nPrograma encerrado, obrigada!");
            //            sobre();
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong);
                console.log("\n\nCadastrar Produto\n\n");

            case 2:
               
                console.log("\n\nListar todos os Produtos\n\n");
              
                keyPress();
                break;
            case 3:
                console.log(colors.fg.whitestrong);
                console.log("\n\nConsultar Produtos - por ID\n\n");

                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong);
                console.log("\n\nConsultar Produto - por Nome\n\n");

                break;
            case 5:
                console.log(colors.fg.whitestrong);
                console.log("\n\nAtualizar Produto \n\n");
            case 6:
                console.log(colors.fg.whitestrong);
                console.log("\n\nDeletar Produto\n\n");
            
        }
    }}
        function keyPress(): void {
            console.log(colors.reset, "");
            console.log("\nPressione enter para continuar...");
            readlinesync.prompt();
        }
        main()
        