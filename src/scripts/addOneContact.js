import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const constants = JSON.parse(data);
    const newContact = createFakeContact();
    constants.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(constants, null, 2));
    console.log('Новий контак доданий');
  } catch (error) {
    console.log('Помилка при додавані контакта', error);
  }
};

addOneContact();
