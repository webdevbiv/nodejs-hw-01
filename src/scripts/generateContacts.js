import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = Array.from({ length: number }, createFakeContact);
    const allContacts = [...existingContacts, ...newContacts];

    await writeContacts(allContacts);
    console.log(
      `[generateContacts] Successfully generated ${number} contacts.`,
    );
  } catch (error) {
    console.error(
      `[generateContacts] Error generating contacts: ${error.message}`,
    );
    throw new Error(`Failed to generate contacts: ${error.message}`);
  }
};

generateContacts(5);
