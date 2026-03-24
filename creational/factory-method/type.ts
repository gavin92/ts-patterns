// 1. Interfaccia Prodotto
// Dichiara le operazioni che tutti i giocattoli concreti devono avere.
// Il capo sa che qualsiasi cosa esca, sarà un "Giocattolo" con queste funzionalità.
interface Giocattolo {
  descrivi(): string;
  gioca(): void;
}

export { Giocattolo };
