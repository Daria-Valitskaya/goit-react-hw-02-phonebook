import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, number, name }) => (
      <li key={id} name={name}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
