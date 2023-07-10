import React, { useState } from 'react'
import styles from './AddContact.module.css'

function AddContact(props) {
    const { setContacts } = props;

    const [nameValue, setNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')

    function handleName(e){
        e.preventDefault() //mencegah page reload
        setNameValue(e.target.value)
    }

    function handlePhone(e){
        e.preventDefault()
        setPhoneValue(e.target.value)
    }

    function handleButtonClick(e){
        if(nameValue === '' || phoneValue === ''){
            window.alert("Fields masih ada yang kosong")
            return;
        }

        e.preventDefault()
        setContacts((prev) => [...prev, { name:nameValue, phone:phoneValue}])
        setNameValue('')
        setPhoneValue('')
    }

  return (
    <form className={styles.form}>
        <input type="text" placeholder="Enter Name" value={nameValue} onChange={handleName}></input>
        <input type="text" placeholder="Enter Phone Number" value={phoneValue} onChange={handlePhone}></input>
        <button onClick={handleButtonClick}>Submit</button>
    </form>
  )
}

export default AddContact