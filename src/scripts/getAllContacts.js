import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error(
      `[getAllContacts] Error retrieving contacts: ${error.message}`,
    );
    throw new Error(`Failed to retrieve contacts: ${error.message}`);
  }
};

console.log(await getAllContacts());
