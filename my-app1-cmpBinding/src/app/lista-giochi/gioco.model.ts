export class Gioco {
  constructor(
    public nome: string,
    public genere: string,
    public annoUscita: number,
    public locandina: string,
    public numGiocatori?: number | string
  ) {}
}
