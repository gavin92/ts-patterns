# Il Pattern: Factory Method

## Definizione

Il **Factory Method** è un pattern creazionale che fornisce un'interfaccia per creare oggetti in una superclasse, ma permette alle sottoclassi di alterare il tipo di oggetti che verranno creati. Invece di creare gli oggetti direttamente (usando l'operatore `new`), si sostituiscono queste chiamate con una chiamata a un metodo speciale, detto appunto "Factory Method". Gli oggetti restituiti da questo metodo vengono spesso definiti _prodotti_.

## Paragone con pattern simili

- **Abstract Factory, Prototype e Builder:** Molti progetti software iniziano utilizzando il _Factory Method_ (poiché è meno complicato e maggiormente personalizzabile tramite le sottoclassi) per poi evolversi verso _Abstract Factory, Prototype_ o _Builder_, che offrono maggiore flessibilità ma a costo di una maggiore complessità. Spesso, le stesse classi _Abstract Factory_ sono costruite utilizzando un insieme di _Factory Method_.
- **Template Method:** Il _Factory Method_ è considerato una specializzazione del _Template Method_. In molti casi, un _Factory Method_ può persino fungere da singolo passaggio all'interno di un algoritmo più grande gestito da un _Template Method_.
- **Prototype:** Mentre il _Prototype_ non si basa sull'ereditarietà e richiede una complicata inizializzazione dell'oggetto clonato, il _Factory Method_ si basa sull'ereditarietà e non richiede passaggi di inizializzazione aggiuntivi.

## Un esempio

Immagina una **Grande Fabbrica di Giocattoli** (la tua superclasse). Il capo della fabbrica stabilisce una regola d'oro: ogni stanza della fabbrica deve avere un grande pulsante rosso chiamato `sfornaGiocattolo()`.

- Nella **Stanza dei Trenini** (una sottoclasse), gli elfi premono il pulsante rosso e dalla macchina esce un _Trenino di Legno_.
- Nella **Stanza dei Peluche** (un'altra sottoclasse), gli elfi premono lo stesso identico pulsante rosso, ma dalla macchina esce un _Orsacchiotto Morbido_.

Il capo della fabbrica non ha bisogno di sapere come vengono montati i singoli pezzi o quale gioco uscirà esattamente. Sa solo che, **dando l'ordine di premere il pulsante, otterrà sempre un giocattolo perfetto**, lasciando ai singoli reparti (le sottoclassi) la libertà di decidere _quale_ giocattolo specifico costruire.

To run the example: npm run dev -- creational/factory-method/client.ts
