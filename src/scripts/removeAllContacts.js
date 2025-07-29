import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log(`[removeAllContacts] Successfully removed all contacts.`);
  } catch (error) {
    console.error(
      `[removeAllContacts] Error removing contacts: ${error.message}`,
    );
    throw new Error(`Failed to remove contacts: ${error.message}`);
  }
};

removeAllContacts();
