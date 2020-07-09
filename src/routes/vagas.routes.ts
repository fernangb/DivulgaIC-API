import { Router } from 'express';
import { uuid } from 'uuidv4';
import { parseISO, endOfDay, isAfter } from 'date-fns';

const vagasRouter = Router();

interface Vaga {
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

const vagas: Vaga[] = [];

// Criando vaga de IC
vagasRouter.post('/', (request, response) => {
  const {
    titulo,
    laboratorio,
    professor,
    descricao,
    curso,
    valorBolsa,
    horasSemanais,
    crMinimo,
    dtAbertura,
    dtValidade,
    observacao,
  } = request.body;

  const dtFinal = endOfDay(parseISO(dtValidade));
  const validarData = isAfter(dtAbertura, dtFinal);

  if (validarData) {
    return response.status(400).json({
      message: 'Erro. O prazo para inscrições é inferior à data de criação',
    });
  }

  const vaga = {
    id: uuid(),
    titulo,
    laboratorio,
    professor,
    curso,
    descricao,
    valorBolsa,
    horasSemanais,
    dtAbertura,
    dtValidade: dtFinal,
    aberta: true,
    observacao,
    crMinimo,
  };

  vagas.push(vaga);

  return response.json(vaga);
});

// Lendo as vagas de IC
vagasRouter.get('/', (request, response) => {
  return response.json(vagas);
});

export default vagasRouter;
