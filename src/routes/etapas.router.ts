import { Router } from 'express';
import { uuid } from 'uuidv4';

const etapasRouter = Router();

interface Etapa {
  id: string;
  nome: string;
}

const etapas: Etapa[] = [];

etapasRouter.post('/', (request, response) => {
  const { nome } = request.body;

  const etapa = {
    id: uuid(),
    nome,
  };

  etapas.push(etapa);

  return response.json(etapa);
});

etapasRouter.get('/', (request, response) => {
  return response.json(etapas);
});

etapasRouter.put('/:id', (request, response) => {
  // const { nome } = request.body;
  // const { id } = request.params;

  return response.json({ message: 'Atualizar etapa' });
});

etapasRouter.delete('/:id', (request, response) => {
  // const { nome } = request.body;
  // const { id } = request.params;
  return response.json({ message: 'Excluir etapa' });
});

export default etapasRouter;
