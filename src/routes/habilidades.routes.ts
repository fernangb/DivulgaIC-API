import { Router } from 'express';
import { uuid } from 'uuidv4';

const habilidadesRouter = Router();

interface Habilidade {
  id: string;
  nome: string;
}

const habilidades: Habilidade[] = [];

habilidadesRouter.post('/', (request, response) => {
  const { nome } = request.body;

  const habilidade = {
    id: uuid(),
    nome,
  };

  habilidades.push(habilidade);

  return response.json(habilidade);
});

habilidadesRouter.get('/', (request, response) => {
  return response.json(habilidades);
});

habilidadesRouter.put('/:id', (request, response) => {
  const { nome } = request.body;
  const { id } = request.params;

  return response.json({ message: 'Atualizar habilidade' });
});

habilidadesRouter.delete('/:id', (request, response) => {
  const { nome } = request.body;
  const { id } = request.params;
  return response.json({ message: 'Excluir habilidade' });
});

export default habilidadesRouter;
