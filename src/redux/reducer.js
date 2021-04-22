import { combineReducers } from "redux";
// import { ADD_CONTACTS, DELETE_CONTACTS, FILTER_CONTACTS } from "./constants";
import { addContact, deleteContactAction, filterContact } from "./actions";

//========== TOOLKIT ========

import { createReducer } from "@reduxjs/toolkit";

const contactsItemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContactAction]: (state, { payload }) => state.filter((contact) => contact.id !== payload),
});

const filterContactReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: contactsItemsReducer,
  filter: filterContactReducer,
});
export default contactsReducer;

// ========= REDUX ==========

// const contactsItems = (
//   state = [
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ],
//   { type, payload }
// ) => {
//   switch (type) {
//     case ADD_CONTACTS:
//       return [...state, payload];
//     case DELETE_CONTACTS:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterContact = (state = "", { type, payload }) => {
//   switch (type) {
//     case FILTER_CONTACTS:
//       return payload;
//     default:
//       return state;
//   }
// };

// const contactsReducer = combineReducers({
//   items: contactsItems,
//   filter: filterContact,
// });

// export default contactsReducer;
