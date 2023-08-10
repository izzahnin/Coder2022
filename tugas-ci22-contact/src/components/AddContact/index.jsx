import PropTypes from 'prop-types';
import { useState } from "react";
import profilepicture from "../../../public/profile.png";

function AddContact(props) {
  const { setContacts } = props;

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [fileValue, setFileValue] = useState(null);

  function handleName(e) {
    e.preventDefault(); //mencegah page reload
    setNameValue(e.target.value);
  }

  function handlePhone(e) {
    e.preventDefault();
    setPhoneValue(e.target.value);
  }

  function handleEmail(e) {
    e.preventDefault();
    setEmailValue(e.target.value);
  }

  function handleFile(e) {
    e.preventDefault();
    setFileValue(e.target.files[0]);
  }

  function handleButtonClick(e) {
    if (!fileValue) {
      setFileValue(profilepicture);
    }

    if (!nameValue || !phoneValue || !emailValue) {
      window.alert("Fields masih ada yang kosong");
      return;
    }

    e.preventDefault();
      const newContact = {
        id: Date.now(),
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        file: fileValue  ? URL.createObjectURL(fileValue) : profilepicture,
      };
    setContacts((prev) => [...prev, newContact]);

    setNameValue("");
    setPhoneValue("");
    setEmailValue("");
    setFileValue(null);
  }

  return (
    <form className="flex flex-col w-1/2 justify-center items-center align-middle gap-2 mb-5">
      {/* input nama */}

      <input className="flex rounded-2xl border-2 px-6 w-full h-9 " type="text" placeholder="Enter Name" value={nameValue} onChange={handleName}></input>
      {/* input phone */}

      <input className="flex rounded-2xl border-2 px-6 w-full h-9 " type="text" placeholder="Enter Phone Number" value={phoneValue} onChange={handlePhone}></input>
      {/* input email */}

      <input className="flex rounded-2xl border-2 px-6 w-full h-9 " type="text" placeholder="Enter Email" value={emailValue} onChange={handleEmail}></input>

      {/* input file */}
      <input className="flex rounded-2xl border-2 px-6 w-full h-9 py-[2px] cursor-pointer" type="file" accept="image/" onChange={handleFile}></input>


      <button className="bg-blue_custom text-white py-3 px-8 rounded-full" onClick={handleButtonClick}>
        Submit
      </button>
    </form>
  );
}

AddContact.propTypes = {
  setContacts: PropTypes.func.isRequired,
};

export default AddContact;
