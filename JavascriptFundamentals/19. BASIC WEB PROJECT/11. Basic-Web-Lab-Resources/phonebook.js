/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const phoneBook = [];

const addContact = contact => {
	phoneBook.push(contact)
	console.log(phoneBook);
};

const getContacts = () => {
	return phoneBook.slice();
}

module.exports = {
	addContact,
	getContacts,
}