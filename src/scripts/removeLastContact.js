import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Останій контакт видалений');
    } else {
      console.log('Контактів для видалення немає');
    }
  } catch (error) {
    console.error('Помилка при видаленні останього контакту:', error);
    throw error;
  }
};

removeLastContact();
