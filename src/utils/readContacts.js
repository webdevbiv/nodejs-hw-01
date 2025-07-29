import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data.trim());
  } catch (error) {
    console.error(`[readContacts] Failed to read: ${error.message}`);
    return [];
  }
};
