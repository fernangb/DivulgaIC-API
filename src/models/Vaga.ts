class Vaga {
  id: string;

  titulo: string;

  laboratorio: string;

  professor: string;

  curso: string;

  descricao: string;

  valorBolsa: number;

  horasSemanais: number;

  dtAbertura: Date;

  dtValidade: Date | null;

  aberta: boolean;

  observacao: string | null;

  crMinimo: number | null;
}

export default Vaga;
