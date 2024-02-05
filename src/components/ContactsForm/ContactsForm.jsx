import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import css from './ContactsForm.module.css';

export const ContactsForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    const hasDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (hasDuplicate) return alert(`${name} is already in contacts.`);

    dispatch(addContact({ name, number }));
    e.currentTarget.reset();
  };

  return (
    <form className={css['contacts-form']} onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Name</label>
      <input
        type="text"
        name="name"
        id="contact-name"
        autoComplete="name"
        required
      />
      <label htmlFor="contact-number">Number</label>
      <input
        type="tel"
        name="number"
        id="contact-number"
        autoComplete="tel"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
