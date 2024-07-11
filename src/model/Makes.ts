import { Produto } from "./Produto";

export class Makes extends Produto {

private _corDaMake: string;

	constructor(id: number, nome: string, tipo: number, preco: number, corDaMake: string) {
        super(id, nome, tipo, preco)
		this._corDaMake = corDaMake;
	}

	public get tipoDeMake(): string {
		return this._corDaMake;
	}

	public set tipoDeMake(value: string) {
		this._corDaMake = value;
	}

    public visualizar() {
        super.visualizar();
        console.log(`Tipo de Make?: ${this._corDaMake}`);

}
}