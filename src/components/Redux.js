import {createStore} from "redux"

const Redux = () => {
  return (
    <div>
      <h1>redux</h1>
    </div>
  );
};
export default Redux;

const BUY_CAKE = "buy_cake";

// Action
// { type : BUY_CAKE,
//     info : 'first redux action'
// }

// action creator
function buycake() {
  return { type: BUY_CAKE, info: "first redux action" };
}

// initial state
const initialState = {
  numOfCakes: 10,
};

// reducer function 
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "buy_cake":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// Store 

const store = createStore(cakeReducer)
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(()=>console.log("updated state", store.getState()))
store.dispatch({type : "buy_cake"}) //action
store.dispatch(buycake()) // action creator
unsubscribe()
store.dispatch({type : "buy_cake"}) // after unsubscribe it stop to state changes will not call subscribe callback fn 