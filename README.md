# Sunnee Beachwear

Imaginary brand **Sunnee**, developed in **TypeScript**.  
The project includes entities, business rules, states, and interactions between objects (Customer, Product, ProductionProcess).

---

## 📦 Project structure

The main domain file is:

beachwear.ts

The project can be executed:

- directly on **CodePen**  
- or in a local **TypeScript + Node.js** environment using `tsc` e `node`.

---

## 🌐 Running on CodePen

The project is also available :

👉 **https://codepen.io/editor/gianni-corsato/pen/019fba02-4789-78a8-9601-c91cf012f6e4**

On CodePen you simply need:

- paste the content of `beachwear.ts`
- remove all `export` (CodePen doesn't support ES6 modules)
- select **TypeScript** as the processor

---

## 🛠 Requirement for local Execution

To run the project locally:

- **Node.js** (version 18+ recommended)
- **TypeScript** installed globally:

npm install -g typescript

•	Visual Studio Code (recommended)

---

## 📁 Folder Structure

The project uses a simple structure:

```
/src
  beachwear.ts
/tsconfig.json
/dist
  beachwear.js   (generated automatically)
```
---

## ⚙️ TypeScript Configuration file (tsconfig.json)

To correctly compile the `beachwear.ts` file, you must create a `tsconfig.json` file in the project root.

Esempio di configurazione utilizzata:
```
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "CommonJS",
    "target": "ES2020",
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

Explanation of the main options:
```
•	rootDir: Specifies the source folder (src).
•	outDir: Specifies the output folder (dist).
•	forceConsistentCasingInFileNames:  Prevents errors caused by inconsistent filename casing.
•	module: This option tells TypeScript to generate JavaScript files that use the CommonJS module system, which is the default module format used by Node.js
•	target: This option defines the version of JavaScript that TypeScript should output.
```
---

## 🧱 Project Compilation

After creating tsconfig.json, you can compile the project from the VSCode terminal:
tsc -p tsconfig.json

This command:
•	reads the compiler configuration
•	compiles src/beachwear.ts
•	generates dist/beachwear.js

---

## ▶️ Runnig the Project

Once compiled, you can run the generated JavaScript file:
```
node .\dist\beachwear.js

On macOS/Linux:
node ./dist/beachwear.js
```
---

## 🧩 main features
```
•	Dynamic creation of products (swimsuits, pareos, hats, sunglasses)
•	Product state management (available, out of stock, ordered)
•	Customers ordering products
•	Assigning products to production processes
•	Printing the final state of products and production processes
```
---

## 📚 Example Output
```
Product RELAX-001 assigned to customer Pablo Picasso. Status updated to "ordered".
Customer Pablo Picasso ordered product RELAX-001 (swimsuit, size M, color ocean blue).
...
--- Final Product Status ---
ID: RELAX-001, type: swimsuit, status: ordered, customer: Pablo Picasso
...
--- Products in Production Processes ---
Process: Fishing Net Recycling
  - RELAX-001 (swimsuit) – status: ordered

---
```
## 🐙 Repository GitHub

The complete project is available here:
👉 https://github.com/giacorsa/beachwear (github.com in Bing)

---

## 👤 Autore
Gianni Corsato (giacorsa) Educational project for domain modeling in TypeScript.

---

## 📄 Licenza
MIT License: You are free to use, modify, and distribute the project.

---
