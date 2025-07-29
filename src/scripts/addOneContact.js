import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const allContacts = [...existingContacts, newContact];

    await writeContacts(allContacts);
    console.log(`[addOneContact] Successfully added a new contact.`);
  } catch (error) {
    console.error(`[addOneContact] Error adding contact: ${error.message}`);
    throw new Error(`Failed to add contact: ${error.message}`);
  }
};

addOneContact();
