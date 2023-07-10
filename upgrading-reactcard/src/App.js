import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";
import AddContact from "./components/AddContact";

function App() 
{
  const [contacts, setContacts] = useState([])
  
  return (
    <main className={styles.main}>
      <Navbar />
      <AddContact setContacts={setContacts}/>
      <h1>Aplikasi Kontak</h1>
      <ul className={styles.cards}>{
        contacts.map(contact => (
          <Card name={contact.name} phone={contact.phone} setContacts={setContacts}/>
        ))
      }
      </ul>
    </main>
  );
}

export default App;
