import { createStore } from 'redux';

// const incrementCount1 = () => { 
//   return {
//     type: 'INCREMENT'
//   }
// };

const add = ( {a, b}, c ) => {
  return a + b + c;
};

console.log(add( {a: 1, b: 2}, 3 ));

const incrementCount = ( {incrementBy = 1 } = {}) => ({ 
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} ) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ( { count = 101 } = {} ) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
  count: 0
});

// Reduceers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      var decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
};

const store = createStore(countReducer);

// listen whenever an action is dispatched to the store
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount( { incrementBy: 5 } ));
store.dispatch(incrementCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount( {decrementBy: 1000} ));

store.dispatch(setCount());
store.dispatch(setCount( { couunt: -100 } ));

store.dispatch(resetCount());

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'SET',
  count: 101
});

console.log(store.getState());
