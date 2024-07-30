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
