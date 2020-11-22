import express from 'express';
import bodyParser from 'body-parser';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Inside use');
  next();
});

app.use(express.static(__dirname + '/public'));

app.get('/asadassda', (req, res) => {
  res.header('Content-Type', 'application/json');

  let testJson = {
    test: 'testJson3',
  };

  res.send(testJson);
});

app.post('/dopost/:id', (req, res) => {
  console.log(1, req.query);
  console.log(2, req.headers);
  console.log(3, req.body);
  console.log(4, req.params);
  res
    .status(404)
    .send(
      'Hahahaha motherfucker ' +
        req.body.name +
        ' is ' +
        req.body.age +
        ' yrs old'
    );
});

app.listen(port, () => {
  console.log('Example app listening to port ' + port);
});
