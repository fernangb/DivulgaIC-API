import { Router } from 'express';
import { uuid } from 'uuidv4';
import { parseISO, endOfDay, isAfter } from 'date-fns';

const vagasRouter = Router();

interface Vaga {
  id: string;
  nome: string;
  laboratorio: string;
  areas: string[];
  professor: string;
  descricao: string;
  cursos: string[];
  vlBolsa: number;
  qtdVagas: number;
  crMinimo: number;
  dtCriacao: Date;
  dtFinalCandidatura: Date;
}

const vagas: Vaga[] = [];

// Criando vaga de IC
vagasRouter.post('/', (request, response) => {
  const {
    nome,
    laboratorio,
    areas,
    professor,
    descricao,
    cursos,
    vlBolsa,
    qtdVagas,
    crMinimo,
    dtCriacao,
    dtFinalCandidatura,
  } = request.body;

  const dtFinal = endOfDay(parseISO(dtFinalCandidatura));
  const validarData = isAfter(dtCriacao, dtFinal);

  if (validarData) {
    return response.status(400).json({
      message: 'Erro. O prazo para inscrições é inferior à data de criação',
    });
  }

  const vaga = {
    id: uuid(),
    nome,
    laboratorio,
    areas,
    professor,
    descricao,
    cursos,
    vlBolsa,
    qtdVagas,
    crMinimo,
    dtCriacao,
    dtFinalCandidatura: dtFinal,
  };

  vagas.push(vaga);

  return response.json(vaga);
});

// Lendo as vagas de IC
vagasRouter.get('/', (request, response) => {
  return response.json(vagas);
});

export default vagasRouter;
