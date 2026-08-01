export type TipoProdotto = "costume da bagno" | "pareo" | "cappello" | "occhiali da sole";
export type StatoProdotto = "disponibile" | "esaurito" | "ordinato";
export type MetodoPagamento = "carta di credito" | "paypal" | "bonifico" | "cash";
export interface ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: MetodoPagamento;
    ordinaProdotto(prodotto: IProdotto): void;
}
export interface IProdotto {
    tipo: TipoProdotto;
    id: string;
    taglia: string;
    colore: string;
    stato: StatoProdotto;
    clienteAssegnato?: ICliente;
    assegnaCliente(cliente: ICliente): void;
}
export interface IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
    aggiungiProdotto(prodotto: IProdotto): void;
}
export declare class Cliente implements ICliente {
    nome: string;
    cognome: string;
    email: string;
    metodoPagamentoPreferito: MetodoPagamento;
    constructor(nome: string, cognome: string, email: string, metodoPagamentoPreferito: MetodoPagamento);
    ordinaProdotto(prodotto: IProdotto): void;
}
export declare class Prodotto implements IProdotto {
    tipo: TipoProdotto;
    id: string;
    taglia: string;
    colore: string;
    stato: StatoProdotto;
    clienteAssegnato?: ICliente;
    constructor(tipo: TipoProdotto, id: string, taglia: string, colore: string, stato?: StatoProdotto);
    assegnaCliente(cliente: ICliente): void;
}
export declare class ProcessoProduzione implements IProcessoProduzione {
    nomeProcesso: string;
    descrizione: string;
    prodottiInProduzione: IProdotto[];
    constructor(nomeProcesso: string, descrizione: string);
    aggiungiProdotto(prodotto: IProdotto): void;
}
//# sourceMappingURL=beachwear.d.ts.map