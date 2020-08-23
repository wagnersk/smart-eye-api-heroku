import './database/index';
import express from 'express';
import cors from 'cors';
import UrlSchema from './schemas/Url';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());
const newUrl = [];

// criar uma rota que só verifica se o retorno do statuscode é 200 , para
// no frontend eu botar uma bolinha verde de que o raspberry ta funcionando!

async function updatenewUrl() {
  const data = await UrlSchema.findOne({
    key: 1,
  });

  if (data) {
    newUrl[0] = data;
  } else {
    const replace = await UrlSchema.create({
      url: 'url inicial',
      key: 1,
    });
    newUrl[0] = replace;
  }
}
updatenewUrl();

app.get('/', (request, response) => {
  const { url } = newUrl[0];
  response.status(200).json(url);
});

app.put('/', async (request, response) => {
  const { url, verify } = request.body;
  if (verify !== process.env.MANUALAUTH) {
    return response.status(404).json({ error: 'usuário não autorizado ' });
  }

  const update = await UrlSchema.findOneAndUpdate(
    { key: 1 },
    { url },
    { new: true },
  );

  newUrl[0] = update;

  return response.status(201).json(update);
});

app.listen(process.env.PORT || 3000);
