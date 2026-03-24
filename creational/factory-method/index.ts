import { StanzaDeiPeluche, StanzaDeiTrenini } from "./subclasses.js";
import type { FabbricaDiGiocattoli } from "./superclass.js";

// 5. Codice Client (Il flusso dell'applicazione)
// Una funzione che simula il lavoro del capo della fabbrica.
// Lavora solo con la superclasse 'FabbricaDiGiocattoli', quindi possiamo
// passargli qualsiasi Stanza (sottoclasse) senza rompere il codice.
function ispezionaReparto(reparto: FabbricaDiGiocattoli) {
  reparto.ordinaProduzione();
}

console.log("--- Visita alla Stanza dei Trenini ---");
const stanzaTrenini = new StanzaDeiTrenini();
ispezionaReparto(stanzaTrenini);

console.log("\n--- Visita alla Stanza dei Peluche ---");
const stanzaPeluche = new StanzaDeiPeluche();
ispezionaReparto(stanzaPeluche);
