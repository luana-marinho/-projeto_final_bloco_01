import { Produto } from "./Produto";

export class Acessorios extends Produto {

private _corDoAcessorio: string;

	constructor(id: number, nome: string, tipo: number, preco: number, corDoAcessorio: string) {
        super(id, nome, tipo, preco)
		this._corDoAcessorio = corDoAcessorio;
	}

	public get tipoDeMake(): string {
		return this._corDoAcessorio ;
	}

	public set tipoDeMake(value: string) {
		this._corDoAcessorio  = value;
	}

    public visualizar() {
        super.visualizar();
        console.log(`Cor do Acessorio?: ${this._corDoAcessorio }`);

}
}