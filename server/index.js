const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMail = require('./mailer');

const app = express();
const port = 8888

const corsOptions = {
  origin: 'http://localhost:3000',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
};

app.get('/api/messages', cors(corsOptions), (req, res) => {
  sendMail({
    from: 'DIPLOM-SITE@GM.NET',
    to: 'artyom.aweryanow@yandex.ru',
    subject: `Contact from Diplom Website`,
    text: `<h2>Email: ${req.query.email}</h2>
              <h2>Name: ${req.query.name}</h2>
                  <p>Message: ${req.query.text}</p>`,
    email: req.query.email,
    name: req.query.name,
  });

});


app.get('/', cors(corsOptions), (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})