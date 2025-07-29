import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log(`[writeContacts] Successfully wrote contacts to ${PATH_DB}`);
    return updatedContacts;
  } catch (error) {
    console.error(`[writeContacts] Failed to write: ${error.message}`);
    throw new Error(`Failed to write contacts: ${error.message}`);
  }
};
