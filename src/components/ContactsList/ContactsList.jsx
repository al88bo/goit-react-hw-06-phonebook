import { useSelector } from 'react-redux';
import { Contact } from './Contact';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './Contact.module.css';

const getVisibleContacts = (contacts, filterWord) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterWord.trim().toLowerCase())
  ); // (Note: any string includes an empty string))

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filterWord);

  return (
    <ul className={css['contacts-list']}>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
