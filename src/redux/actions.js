import { ADD_CONTACTS, DELETE_CONTACTS, FILTER_CONTACTS } from "./constants";
import { createAction } from "@reduxjs/toolkit";

//========== TOOLKIT ========

const addContact = createAction(ADD_CONTACTS);
const deleteContactAction = createAction(DELETE_CONTACTS);
const filterContact = createAction(FILTER_CONTACTS);

// ========= REDUX ==========

// const addContact = ({ name, number }) => ({
//   type: ADD_CONTACTS,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContactAction = (id) => ({
//   type: DELETE_CONTACTS,
//   payload: id,
// });

// const filterContact = (value) => ({
//   type: FILTER_CONTACTS,
//   payload: value,
// });

export { addContact, deleteContactAction, filterContact };
