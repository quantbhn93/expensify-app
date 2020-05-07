import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

// export here to test unconnected version of AddExpensePage component
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense));
    this.props.addExpense(expense);
    this.props.history.push('/'); // go to dashboard page
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    addExpense: (expense) => dispatch(addExpense(expense))
  };
};

// or short hand to return an object
// const mapDispathToProps = (dispatch) => ({
//   onSubmit: (expense) => dispatch(addExpense(expense))
// });

// export connected version
export default connect(undefined, mapDispathToProps)(AddExpensePage);