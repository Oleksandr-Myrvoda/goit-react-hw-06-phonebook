// import { createStore, combineReducers } from "redux";
// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./reducer";

//========== TOOLKIT ========

const store = configureStore({
  reducer: { contacts: contactsReducer },
});

// ========= REDUX ==========

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
