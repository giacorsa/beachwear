// ---- Interfacce ----

export type TipoProdotto = "costume da bagno"  | "pareo"  | "cappello"  | "occhiali da sole";
export type StatoProdotto = "disponibile" | "esaurito" | "ordinato";
export type MetodoPagamento = "carta di credito"  | "paypal"  | "bonifico"  | "cash";

export interface ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: MetodoPagamento;

  ordinaProdotto(prodotto: IProdotto): void; // chiama prodotto.assegnaCliente()
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

// ---- Classi ----

export class Cliente implements ICliente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamentoPreferito: MetodoPagamento;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamentoPreferito: MetodoPagamento,
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamentoPreferito = metodoPagamentoPreferito;
  }

  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.stato !== "disponibile") {
      console.log(
        `Il prodotto ${prodotto.id} (${prodotto.tipo}) non è disponibile. Stato attuale: ${prodotto.stato}`,
      );
      return;
    }

    prodotto.assegnaCliente(this);
    console.log(
      `Cliente ${this.nome} ${this.cognome} ha ordinato il prodotto ${prodotto.id} (${prodotto.tipo}, taglia ${prodotto.taglia}, colore ${prodotto.colore}).`,
    );
  }
}

export class Prodotto implements IProdotto {
  tipo: TipoProdotto;
  id: string;
  taglia: string;
  colore: string;
  stato: StatoProdotto;
  clienteAssegnato?: ICliente; // Proprietà opzionale

  constructor(
    tipo: TipoProdotto,
    id: string,
    taglia: string,
    colore: string,
    stato: StatoProdotto = "disponibile",
  ) {
    this.tipo = tipo;
    this.id = id;
    this.taglia = taglia;
    this.colore = colore;
    this.stato = stato;
  }

  assegnaCliente(cliente: ICliente): void {
    this.clienteAssegnato = cliente;
    this.stato = "ordinato";
    console.log(
      `Prodotto ${this.id} assegnato al cliente ${cliente.nome} ${cliente.cognome}. Stato aggiornato a "${this.stato}".`,
    );
  }
}

export class ProcessoProduzione implements IProcessoProduzione {
  nomeProcesso: string;
  descrizione: string;
  prodottiInProduzione: IProdotto[] = [];

  constructor(nomeProcesso: string, descrizione: string) {
    this.nomeProcesso = nomeProcesso;
    this.descrizione = descrizione;
  }

  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(
      `Prodotto ${prodotto.id} (${prodotto.tipo}) aggiunto al processo "${this.nomeProcesso}".`,
    );
  }
}

// ---- Istanziazione e test ----

const prodotti: IProdotto[] = [];
const processi: IProcessoProduzione[] = [];

// Prodotti di beachwear in plastica riciclata
const costumeRelax = new Prodotto(
  "costume da bagno",
  "RELAX-001",
  "M",
  "blu oceano",
  "disponibile",
);
prodotti.push(costumeRelax);

const costumeActive = new Prodotto(
  "costume da bagno",
  "ACTIVE-010",
  "L",
  "verde alghe",
  "disponibile",
);
prodotti.push(costumeActive);

const costumeExtreme = new Prodotto(
  "costume da bagno",
  "EXTREME-100",
  "S",
  "nero profondo",
  "esaurito",
);
prodotti.push(costumeExtreme);

const pareoSunrise = new Prodotto(
  "pareo",
  "PAREO-050",
  "taglia unica",
  "corallo",
  "disponibile",
);
prodotti.push(pareoSunrise);

const cappelloWave = new Prodotto(
  "cappello",
  "CAP-007",
  "taglia unica",
  "sabbia",
  "disponibile",
);
prodotti.push(cappelloWave);

const occhialiExtreme = new Prodotto(
  "occhiali da sole",
  "OCC-009",
  "taglia unica",
  "nero",
  "disponibile",
);
prodotti.push(occhialiExtreme);

// Clienti del brand
const clienteGianni = new Cliente(
  "Gianni",
  "Corsato",
  "gianni.corsato@example.com",
  "carta di credito",
);
const clienteSara = new Cliente(
  "Sara",
  "Bianchi",
  "sara.bianchi@example.com",
  "paypal",
);
const clientePablo = new Cliente(
  "Pablo",
  "Picasso",
  "pablo.picasso@artist.com",
  "cash",
);

// Processi di produzione sostenibile
const processoRicicloReti = new ProcessoProduzione(
  "Riciclo Reti da Pesca",
  "Trasforma reti da pesca dismesse in filato riciclato per costumi Sunnee.",
);
processi.push(processoRicicloReti);

const processoTinturaSostenibile = new ProcessoProduzione(
  "Tintura a Basso Impatto",
  "Utilizza coloranti a basso impatto ambientale e ridotto consumo d'acqua.",
);
processi.push(processoTinturaSostenibile);

// Aggiunta prodotti ai processi di produzione
processoRicicloReti.aggiungiProdotto(costumeRelax);
processoRicicloReti.aggiungiProdotto(costumeActive);
processoRicicloReti.aggiungiProdotto(costumeExtreme);
processoRicicloReti.aggiungiProdotto(occhialiExtreme);

processoTinturaSostenibile.aggiungiProdotto(pareoSunrise);
processoTinturaSostenibile.aggiungiProdotto(cappelloWave);

// Test logica di ordinazione

// Cliente ordina un prodotto disponibile
clienteGianni.ordinaProdotto(costumeRelax);

// Cliente prova a ordinare un prodotto esaurito
clienteSara.ordinaProdotto(costumeExtreme);

// Cliente ordina un pareo
clienteSara.ordinaProdotto(pareoSunrise);

// Cliente ordina gli occhiali da sole
clientePablo.ordinaProdotto(occhialiExtreme);

// Stato finale dei prodotti
console.log("\n--- Stato finale prodotti ---");
prodotti.forEach((p) => {
  console.log(
    `ID: ${p.id}, tipo: ${p.tipo}, stato: ${p.stato}, cliente: ${
      p.clienteAssegnato
        ? `${p.clienteAssegnato.nome} ${p.clienteAssegnato.cognome}`
        : "nessuno"
    }`,
  );
});

// Stato dei processi di produzione
console.log("\n--- Prodotti nei processi di produzione ---");
processi.forEach((proc) => {
  console.log(`Processo: ${proc.nomeProcesso}`);
  proc.prodottiInProduzione.forEach((p) =>
    console.log(`  - ${p.id} (${p.tipo}) – stato: ${p.stato}`),
  );
});
