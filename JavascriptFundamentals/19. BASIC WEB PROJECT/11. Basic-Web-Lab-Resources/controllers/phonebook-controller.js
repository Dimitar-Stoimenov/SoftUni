const phonebook = require('../phonebook');
const Contact = require('../models/Contact')

module.exports = {
  index: (req, res) => {
    // Get contacts
    let contacts = phonebook.getContacts();

    res.render('index', {contacts});
    // TODO: load index page

  },
  addPhonebookPost: (req, res) => {
    // TODO: add a phonebook object to the array
    let contact = new Contact(req.body.name, req.body.number);

    phonebook.addContact(contact);
    res.redirect('/');
  }
}