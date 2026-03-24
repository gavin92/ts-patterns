import { OrsacchiottoMorbido, TreninoDiLegno } from "./products.js";
import { FabbricaDiGiocattoli } from "./superclass.js";
import type { Giocattolo } from "./type.js";

// 4. I Creatori Concreti/Sottoclassi
// Sovrascrivono il factory method per cambiare il tipo di prodotto restituito.
class StanzaDeiTrenini extends FabbricaDiGiocattoli {
  sfornaGiocattolo(): Giocattolo {
    return new TreninoDiLegno();
  }
}

class StanzaDeiPeluche extends FabbricaDiGiocattoli {
  sfornaGiocattolo(): Giocattolo {
    return new OrsacchiottoMorbido();
  }
}

export { StanzaDeiTrenini, StanzaDeiPeluche };
