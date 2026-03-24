import type { Giocattolo } from "./type.js";

// 2. I Prodotti Concreti
// Le varie implementazioni dell'interfaccia Prodotto.
class TreninoDiLegno implements Giocattolo {
  descrivi(): string {
    return "un Trenino di Legno";
  }

  gioca(): void {
    console.log("Choo choo! Il trenino sfreccia sui binari della stanza.");
  }
}

class OrsacchiottoMorbido implements Giocattolo {
  descrivi(): string {
    return "un Orsacchiotto Morbido";
  }

  gioca(): void {
    console.log("Abbraccio! L'orsacchiotto è super soffice da stringere.");
  }
}

export { TreninoDiLegno, OrsacchiottoMorbido };
