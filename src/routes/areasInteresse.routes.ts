import { Router } from 'express';
import { uuid } from 'uuidv4';

const areasInteresseRouter = Router();

interface AreaInteresse {
  id: string;
  nome: string;
}

const areasInteresse: AreaInteresse[] = [];

areasInteresseRouter.post('/', (request, response) => {
  const { nome } = request.body;

  const areaInteresse = {
    id: uuid(),
    nome,
  };

  areasInteresse.push(areaInteresse);

  return response.json(areaInteresse);
});

areasInteresseRouter.get('/', (request, response) => {
  return response.json(areasInteresse);
});

areasInteresseRouter.put('/:id', (request, response) => {
  const { nome } = request.body;
  const { id } = request.params;

  return response.json({ message: 'Atualizar areaInteresse' });
});

areasInteresseRouter.delete('/:id', (request, response) => {
  const { nome } = request.body;
  const { id } = request.params;
  return response.json({ message: 'Excluir areaInteresse' });
});

export default areasInteresseRouter;
