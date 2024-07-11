import { Produto } from "./Produto";

export class Acessorios extends Produto {

private _tipoDeAcessorio: string;

	constructor(id: number, nome: string, tipo: number, preco: number, tipoDeAcessorio: string) {
        super(id, nome, tipo, preco)
		this._tipoDeAcessorio = tipoDeAcessorio;
	}

	public get tipoDeMake(): string {
		return this._tipoDeAcessorio ;
	}

	public set tipoDeMake(value: string) {
		this._tipoDeAcessorio  = value;
	}

    public visualizar() {
        super.visualizar();
        console.log(`Tipo de Make?: ${this._tipoDeAcessorio }`);

}
}