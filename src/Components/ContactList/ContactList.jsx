import React from "react";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
// import { ADD_CONTACTS, DELETE_CONTACTS, FILTER_CONTACTS } from "../../redux/constants";
import { deleteContactAction } from "../../redux/actions";

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.item}>
        <p>
          {name}: {number}
        </p>
        <button type="button" className={styles.button} onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    ),
  };
};
const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContactAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
