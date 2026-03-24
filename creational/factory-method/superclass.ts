import { Giocattolo } from "./type.js";

// 3. La classe Creatore/Superclasse
// Dichiara il "metodo fabbrica" e la logica di base della fabbrica.
abstract class FabbricaDiGiocattoli {
  // Il "Grande Pulsante Rosso" (Il Factory Method astratto).
  // Lasciamo che siano le stanze (sottoclassi) a decidere cosa restituire.
  abstract sfornaGiocattolo(): Giocattolo;

  // Questa è la logica principale dell'azienda.
  // Il capo preme il pulsante e usa il prodotto, ignorando la sua classe concreta.
  ordinaProduzione(): void {
    console.log("Capo: 'Premete il grande pulsante rosso!'");

    // Chiamiamo il factory method per creare l'oggetto
    const giocattolo: Giocattolo = this.sfornaGiocattolo();

    console.log(`Dalla macchina è appena uscito ${giocattolo.descrivi()}!`);
    giocattolo.gioca();
  }
}

export { FabbricaDiGiocattoli };
