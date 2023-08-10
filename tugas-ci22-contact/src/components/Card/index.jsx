import { BsTrash } from "react-icons/bs";
import PropTypes from 'prop-types';

function Card(props) {
  const {name, phone, email, file = "", setContacts} = props;


  function handleDelete(){
    setContacts((prev) =>
      prev.filter((contact) => (name !== contact.name || phone !== contact.phone || email !== contact.email))
    );
  }

  Card.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    setContacts: PropTypes.func.isRequired
  };
  
  return (
    <div className="flex flex-col w-96 shadow-lg rounded-2xl">
      <section className="flex items-center text-2xl font-semibold px-10 h-20  bg-blue_custom rounded-t-2xl">
        <h1 className="text-white">{name}</h1>
      </section>
      <section className="flex justify-end items-center pr-8">
        <img className="absolute w-24 h-24 rounded-full border-4 " src={file} alt="" />
      </section>
      <section className="flex  flex-col justify-center h-28 px-10 bg-neutral-50 rounded-b-2xl ">
        <p>{phone}</p>
        <p>{email}</p>
      </section>
      <section className="flex justify-end items-end">
        <button className="absolute pb-4 px-5" onClick={handleDelete}>
          <BsTrash className="text-red-600" />
        </button>
      </section>
    </div>
  );
}

export default Card;
