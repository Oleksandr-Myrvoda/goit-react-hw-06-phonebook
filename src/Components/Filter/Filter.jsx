import React from "react";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { filterContact } from "../../redux/actions";

const Filter = ({ value, onChange }) => (
  <label>
    <p className={styles.title}>Filter</p>
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
