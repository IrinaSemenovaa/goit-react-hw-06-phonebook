import SearchBar from './SearchBar/SearchBar';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBar />
      <ContactList />
    </div>
  );
}
