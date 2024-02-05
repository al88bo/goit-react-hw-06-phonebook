import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsListFilter } from './ContactsListFilter/ContactsListFilter';

const STORAGE_KEY = 'Contacts_array';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRenderRef = useRef(true);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  ); // (Note: any string includes an empty string)

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    storageContacts && setContacts(storageContacts);
  }, []);

  useEffect(() => {
    if (!isFirstRenderRef.current)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    return () => (isFirstRenderRef.current = false);
  }, [contacts]);

  const addContact = formDataObj => {
    const hasDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === formDataObj.name.toLowerCase()
    );
    if (hasDuplicate)
      return alert(`${formDataObj.name} is already in contacts.`);
    formDataObj.id = nanoid();
    setContacts(prevState => [...prevState, formDataObj]);
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(obj => obj.id !== contactId));
  };

  return (
    <SectionWrapper title="Phonebook">
      <ContactsForm addContact={addContact} />
      <h2>Contacts</h2>
      <ContactsListFilter
        filter={filter}
        handleChangeFilter={handleChangeFilter}
      />
      <ContactsList contacts={filteredContacts} deleteContact={deleteContact} />
    </SectionWrapper>
  );
};
