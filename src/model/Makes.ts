import { Produto } from "./Produto";

export class Makes extends Produto {

private _tipoDeMake: string;

	constructor(id: number, nome: string, tipo: number, preco: number, tipoDeMake: string) {
        super(id, nome, tipo, preco)
		this._tipoDeMake = tipoDeMake;
	}

	public get tipoDeMake(): string {
		return this._tipoDeMake;
	}

	public set tipoDeMake(value: string) {
		this._tipoDeMake = value;
	}

    public visualizar() {
        super.visualizar();
        console.log(`Tipo de Make?: ${this._tipoDeMake}`);

}
}