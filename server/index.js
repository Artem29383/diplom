require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMail = require('./mailer');
const nodemailer = require('nodemailer');

const app = express();
const port = 8888

const corsOptions = {
  origin: 'http://localhost:3000',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'graphcmsaccexist@gmail.com',
    pass: '123123aa!',
  },
});


app.get('/api/messages', cors(corsOptions), (req, res) => {
  // sendMail({
  //   from: 'DIPLOM-SITE@GM.NET',
  //   to: 'artyom.aweryanow@yandex.ru',
  //   subject: `Contact from Diplom Website`,
  //   text: `<h2>Email: ${req.query.email}</h2>
  //             <h2>Name: ${req.query.name}</h2>
  //                 <p>Message: ${req.query.text}</p>`,
  //   email: req.query.email,
  //   name: req.query.name,
  // }).then(r => console.info(r)).catch(e => console.info(e));
  transporter.sendMail(
    {
      from: `${req.query.email} <IR@gatewayfund.net>`,
      to: 'artyom.aweryanow@yandex.ru',
      subject: `email: ${req.query.email}, name: ${req.query.name}`,
      html: req.query.text,
    },
    function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    }
  );


});


app.get('/', cors(corsOptions), (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
