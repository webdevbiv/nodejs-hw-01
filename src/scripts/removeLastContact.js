import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log(`[removeLastContact] No contacts to remove.`);
      return;
    }

    const updatedContacts = contacts.slice(0, -1);
    await writeContacts(updatedContacts);
    console.log(`[removeLastContact] Successfully removed the last contact.`);
  } catch (error) {
    console.error(
      `[removeLastContact] Error removing last contact: ${error.message}`,
    );
    throw new Error(`Failed to remove last contact: ${error.message}`);
  }
};

removeLastContact();
