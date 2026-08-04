// ---- Interfaces ----

export type ProductType = "swimsuit" | "pareo" | "hat" | "sunglasses";
export type ProductStatus = "available" | "out of stock" | "ordered";
export type PaymentMethod = "credit card" | "paypal" | "bank transfer" | "cash";

export interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  preferredPaymentMethod: PaymentMethod;

  orderProduct(product: IProduct): void; // calls product.assignCustomer()
}

export interface IProduct {
  type: ProductType;
  id: string;
  size: string;
  color: string;
  status: ProductStatus;

  assignedCustomer?: ICustomer;

  assignCustomer(customer: ICustomer): void;
}

export interface IProductionProcess {
  processName: string;
  description: string;
  productsInProcess: IProduct[];

  addProduct(product: IProduct): void;
}

// ---- Classes ----

export class Customer implements ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  preferredPaymentMethod: PaymentMethod;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    preferredPaymentMethod: PaymentMethod,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.preferredPaymentMethod = preferredPaymentMethod;
  }

  orderProduct(product: IProduct): void {
    if (product.status === "out of stock") {
      console.log(
        `Product ${product.id} (${product.type}) cannot be ordered because it is out of stock. Current status: ${product.status}`,
      );
      return;
    }

    product.assignCustomer(this);
    console.log(
      `Customer ${this.firstName} ${this.lastName} ordered product ${product.id} (${product.type}, size ${product.size}, color ${product.color}).`,
    );
  }
}

export class Product implements IProduct {
  type: ProductType;
  id: string;
  size: string;
  color: string;
  status: ProductStatus;
  assignedCustomer?: ICustomer;

  constructor(
    type: ProductType,
    id: string,
    size: string,
    color: string,
    status: ProductStatus = "available",
  ) {
    this.type = type;
    this.id = id;
    this.size = size;
    this.color = color;
    this.status = status;
  }

  assignCustomer(customer: ICustomer): void {
    this.assignedCustomer = customer;
    this.status = "ordered";
    console.log(
      `Product ${this.id} assigned to customer ${customer.firstName} ${customer.lastName}. Status updated to "${this.status}".`,
    );
  }
}

export class ProductionProcess implements IProductionProcess {
  processName: string;
  description: string;
  productsInProcess: IProduct[] = [];

  constructor(processName: string, description: string) {
    this.processName = processName;
    this.description = description;
  }

  addProduct(product: IProduct): void {
    this.productsInProcess.push(product);
    console.log(
      `Product ${product.id} (${product.type}) added to process "${this.processName}".`,
    );
  }
}

// ---- Instantiation and tests ----

const products: IProduct[] = [];
const processes: IProductionProcess[] = [];

// Beachwear products made from recycled plastic
const swimsuitRelax = new Product(
  "swimsuit",
  "RELAX-001",
  "M",
  "ocean blue",
  "available",
);
products.push(swimsuitRelax);

const swimsuitActive = new Product(
  "swimsuit",
  "ACTIVE-010",
  "L",
  "seaweed green",
  "available",
);
products.push(swimsuitActive);

const swimsuitExtreme = new Product(
  "swimsuit",
  "EXTREME-100",
  "S",
  "deep black",
  "out of stock",
);
products.push(swimsuitExtreme);

const pareoSunrise = new Product(
  "pareo",
  "PAREO-050",
  "one size",
  "coral",
  "available",
);
products.push(pareoSunrise);

const hatWave = new Product(
  "hat",
  "CAP-007",
  "one size",
  "sand",
  "available",
);
products.push(hatWave);

const sunglassesExtreme = new Product(
  "sunglasses",
  "OCC-009",
  "one size",
  "black",
  "available",
);
products.push(sunglassesExtreme);

// Brand customers
const customerGianni = new Customer(
  "Gianni",
  "Corsato",
  "gianni.corsato@example.com",
  "credit card",
);
const customerSara = new Customer(
  "Sara",
  "Bianchi",
  "sara.bianchi@example.com",
  "paypal",
);
const customerPablo = new Customer(
  "Pablo",
  "Picasso",
  "pablo.picasso@artist.com",
  "cash",
);

// Sustainable production processes
const processNetRecycling = new ProductionProcess(
  "Fishing Net Recycling",
  "Transforms discarded fishing nets into recycled yarn for Sunnee swimsuits.",
);
processes.push(processNetRecycling);

const processLowImpactDyeing = new ProductionProcess(
  "Low-Impact Dyeing",
  "Uses environmentally friendly dyes with reduced water consumption.",
);
processes.push(processLowImpactDyeing);

// Add products to production processes
processNetRecycling.addProduct(swimsuitRelax);
processNetRecycling.addProduct(swimsuitActive);
processNetRecycling.addProduct(swimsuitExtreme);
processNetRecycling.addProduct(sunglassesExtreme);

processLowImpactDyeing.addProduct(pareoSunrise);
processLowImpactDyeing.addProduct(hatWave);

// Ordering logic tests

// Customer orders an available product RELAX-001
customerGianni.orderProduct(swimsuitRelax);

// Multiple customers order the same product RELAX-001 (relaxed constraint: product.status !== available and === out of stock)
customerSara.orderProduct(swimsuitRelax);
customerPablo.orderProduct(swimsuitRelax);

// Customer tries to order an out-of-stock product
customerSara.orderProduct(swimsuitExtreme);

// Customer orders a pareo
customerSara.orderProduct(pareoSunrise);

// Customer orders sunglasses
customerPablo.orderProduct(sunglassesExtreme);

// Final product status
console.log("\n--- Final Product Status ---");
products.forEach((p) => {
  console.log(
    `ID: ${p.id}, type: ${p.type}, status: ${p.status}, customer: ${
      p.assignedCustomer
        ? `${p.assignedCustomer.firstName} ${p.assignedCustomer.lastName}`
        : "none"
    }`,
  );
});

// Production process status
console.log("\n--- Products in Production Processes ---");
processes.forEach((proc) => {
  console.log(`Process: ${proc.processName}`);
  proc.productsInProcess.forEach((p) =>
    console.log(`  - ${p.id} (${p.type}) – status: ${p.status}`),
  );
});
