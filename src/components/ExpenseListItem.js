import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ dispatch, id, description, amount, createAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >Remove</button>
  </div>
);

export default connect()(ExpenseListItem);