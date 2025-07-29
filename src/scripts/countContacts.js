import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`[countContacts] Total contacts: ${contacts.length}`);
  } catch (error) {
    console.error(`[countContacts] Error: ${error.message}`);
    throw new Error(`Failed to count contacts: ${error.message}`);
  }
};

countContacts();
