import "./App.css";
import myProfile from "../public/pic1.jpg";
import Card from "./components/Card";
import AddContact from "./components/AddContact";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <>
      <div className="flex bg-gray-50 w-screen items-center justify-center">
        <div className="flex w-5/6 min-h-screen bg-white my-10 flex-col shadow-xl jus mb-5">
          {/* header */}
          <div className="flex justify-center items-center p-4 gap-3">
            <h1 className="flex font-bold text-2xl ">My Contact</h1>
            <img className="flex w-[70px] h-[70px] rounded-full border-4 " src={myProfile} alt="" />
          </div>
          <div className="flex justify-center">
            <AddContact setContacts={setContacts} />
            {/* <AddContact /> */}
          </div>
          <div className="flex justify-center">
            {/* <Card/> */}
            <ul className="flex flex-col gap-4 mb-5">
            {contacts.map((contact) => {
              console.log("Contact File:", contact.file); // Add this line to inspect the value
              return (
                <Card
                  key={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  email={contact.email}
                  file={contact.file}
                  setContacts={setContacts}
                />
              );
            })}

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
