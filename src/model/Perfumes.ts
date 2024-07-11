import { Produto } from "./Produto";

export class Perfumes extends Produto {

private _fragrancia: string;

	constructor(id: number, nome: string, tipo: number, preco: number, fragrancia: string) {
        super(id, nome, tipo, preco)
		this._fragrancia = fragrancia;
	}

	public get tipoDeMake(): string {
		return this._fragrancia ;
	}

	public set tipoDeMake(value: string) {
		this._fragrancia  = value;
	}

    public visualizar() {
        super.visualizar();
        console.log(`Tipo de Make?: ${this._fragrancia }`);

}
}