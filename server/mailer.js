const mailgun =  require('mailgun-js');
const util = require('util');


const mailer = mailgun({
  apiKey: process.env.API_KEY,
  domain: process.env.DOMAIN,
});

const list = mailer.lists(process.env.LIST);

const messagesService = mailer.messages();
const members = list.members();

messagesService.send = util.promisify(messagesService.send);
members.create = util.promisify(members.create);

module.exports = ({ from, to, subject, text, attachments, email, name }) =>
  Promise.all([
    members.create({
      name,
      address: email,
    }),
    messagesService.send(
      {
        to,
        html: text,
        from,
        subject,
        attachments: '',
      },
      function(error, body) {
        console.info(body);
        return body;
      }
    ),
  ]);
