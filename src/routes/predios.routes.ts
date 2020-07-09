import { Router } from 'express';
import { uuid } from 'uuidv4';

const prediosRouter = Router();

interface Predio {
  id: string;
  nome: string;
  endereco: string;
}

const predios: Predio[] = [];

prediosRouter.post('/', (request, response) => {
  const { nome, endereco } = request.body;

  const predio = {
    id: uuid(),
    nome,
    endereco,
  };

  predios.push(predio);

  return response.json(predio);
});

prediosRouter.get('/', (request, response) => {
  return response.json(predios);
});

prediosRouter.put('/:id', (request, response) => {
  const { nome, endereco } = request.body;
  const { id } = request.params;

  return response.json({ message: 'Atualizar predio' });
});

prediosRouter.delete('/:id', (request, response) => {
  const { nome, endereco } = request.body;
  const { id } = request.params;
  return response.json({ message: 'Excluir predio' });
});

export default prediosRouter;
