import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsListFilter } from './ContactsListFilter/ContactsListFilter';

export const App = () => (
  <SectionWrapper title="Phonebook">
    <ContactsForm />
    <h2>Contacts</h2>
    <ContactsListFilter />
    <ContactsList />
  </SectionWrapper>
);
