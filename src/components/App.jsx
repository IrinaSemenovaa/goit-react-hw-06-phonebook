import SearchBar from './SearchBar/SearchBar';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default function App() {
  return (
    <div
      style={{
        width: '670px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: ' 4px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBar />
      <ContactList />
    </div>
  );
}
