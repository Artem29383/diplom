const mailgun =  require('mailgun-js');
const util = require('util');


const mailer = mailgun({
  apiKey: '19da35a0925427778c9044cd5869341b-73e57fef-ae36c0df',
  domain: 'sandbox31daab08795740e9a9cb17495d46b917.mailgun.org',
});

const list = mailer.lists(`diplom@sandbox31daab08795740e9a9cb17495d46b917.mailgun.org`);

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
