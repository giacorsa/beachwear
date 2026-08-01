# Sunnee Beachwear

Brand immaginario **Sunnee**, sviluppato in **TypeScript**.  
Il progetto include entità, regole di business, stati e interazioni tra oggetti (Cliente, Prodotto, ProcessoProduzione).

---

## 📦 Struttura del progetto

Il file principale del dominio è:

beachwear.ts

Il progetto può essere eseguito:

- direttamente su **CodePen**  
- oppure in un ambiente **TypeScript + Node.js** locale tramite `tsc` e `node`.

---

## 🌐 Esecuzione su CodePen

Il progetto è disponibile anche online:

👉 **https://codepen.io/editor/gianni-corsato/pen/019fba02-4789-78a8-9601-c91cf012f6e4**

Su CodePen è sufficiente:

- incollare il contenuto di `beachwear.ts`
- rimuovere gli `export` (CodePen non supporta moduli ES6)
- selezionare **TypeScript** come preprocessore

---

## 🛠 Requisiti per esecuzione locale

Per eseguire il progetto in locale:

- **Node.js** (versione 18+ consigliata)
- **TypeScript** installato globalmente:

npm install -g typescript

•	Visual Studio Code (consigliato)

---

## 📁 Struttura delle cartelle

Il progetto utilizza una struttura semplice:

``
/src
  beachwear.ts
/tsconfig.json
/dist
  beachwear.js   (generato automaticamente)
``
---

## ⚙️ Configurazione TypeScript (tsconfig.json)

Per compilare correttamente il file beachwear.ts, è necessario creare un file tsconfig.json nella root del progetto.

Esempio di configurazione utilizzata:
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "forceConsistentCasingInFileNames": true,
    "module": "es6",
    "target": "es6"
  }
}

Spiegazione delle opzioni principali
•	rootDir Indica la cartella sorgente (src).
•	outDir Indica la cartella di output (dist).
•	forceConsistentCasingInFileNames Evita errori dovuti a differenze di maiuscole/minuscole nei percorsi.
•	module: es6 Compila il codice usando moduli ES6.
•	target: es6 Genera JavaScript moderno compatibile con Node.js.

---

## 🧱 Compilazione del progetto

Dopo aver creato tsconfig.json, puoi compilare il progetto da terminale VSCode:
tsc -p tsconfig.json

Questo comando:
•	legge la configurazione del compilatore
•	compila src/beachwear.ts
•	genera dist/beachwear.js

---

## ▶️ Esecuzione del progetto

Una volta compilato, puoi eseguire il file JavaScript generato:
node .\dist\beachwear.js

Oppure su macOS/Linux:
node ./dist/beachwear.js

---

## 🧩 Funzionalità principali

•	Creazione dinamica di prodotti (costumi, parei, cappelli, occhiali da sole)
•	Gestione dello stato del prodotto (disponibile, esaurito, ordinato)
•	Ordinazione dei prodotti da parte dei clienti
•	Assegnazione dei prodotti ai processi di produzione
•	Stampa dello stato finale dei prodotti e dei processi di produzione

---

## 📚 Esempio di output

Cliente Gianni Corsato ha ordinato il prodotto RELAX-001
Prodotto OCC-009 assegnato al cliente Pablo Picasso
...
--- Stato finale prodotti ---
RELAX-001 → ordinato (Gianni Corsato)
PAREO-050 → ordinato (Sara Bianchi)
OCC-009 → ordinato (Pablo Picasso)

---

## 🐙 Repository GitHub

Il progetto completo è disponibile qui:
👉 https://github.com/giacorsa/beachwear (github.com in Bing)

---

## 👤 Autore
Gianni Corsato (giacorsa) Progetto didattico di modellazione del dominio in TypeScript.

---

## 📄 Licenza
MIT License: Puoi usare, modificare e distribuire liberamente il progetto.

---
