import styles from "./Card.module.css";
import { ImPhone } from "react-icons/im";
import { MdEmail, MdAccountCircle } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

function Card(props){
  const { name, phone, setContacts } = props;

  function handleDelete(){
    setContacts((prev) =>
      prev.filter((contact) => (name !== contact.name || phone !== contact.phone))
    );
  }

  return (
    <section className={styles.card}>
      <div className={styles.contact}>
        <MdAccountCircle className={styles.profile} />
        <div className={styles.details}>
          <h3>{name}</h3>
          <p>{phone}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn}>
          <ImPhone className={styles.icon} />
        </button>
        <button className={styles.btn}>
          <MdEmail className={styles.icon} />
        </button>
        <button className={styles.blue} onClick={handleDelete}>
          <BsTrash className={styles.icon} />
        </button>
      </div>
    </section>
  );
};

export default Card;
