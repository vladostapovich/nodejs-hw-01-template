import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const newContactPush = [];
    for (let i = 0; i < number; i++) {
      newContactPush.push(createFakeContact());
    }
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const updatedContacts = [...contacts, ...newContactPush];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
    console.log(`${number} new contacts added successfully!`);
    console.log(`Загальна сума контактів тепер : ${updatedContacts.length}`);
  } catch (error) {
    console.log('Error:', error);
  }
};

generateContacts(5);
