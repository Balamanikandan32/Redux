import {combineReducers, createStore} from "redux"

const Redux = () => {
  return (
    <div>
      <h1>redux</h1>
    </div>
  );
};
export default Redux;

const BUY_CAKE = "buy_cake";
const BUY_ICECREAM = "buy_icecream"

// Action
// { type : BUY_CAKE,
//     info : 'first redux action'
// }

// action creator
function buycake() {
  return { type: BUY_CAKE, info: "first redux action" };
}

function buyicecream(){
    return {
        type: BUY_ICECREAM,
    }
}

// initial state
const initialBuycakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
    numOfIcecream : 20,
}

// reducer function for cake
const cakeReducer = (state = initialBuycakeState, action) => {
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
 // reduceer fucntion for Icecream
const icecreamReducer = (state = initialIcecreamState, action)=>{
    switch(action.type){
        case "buy_icecream" :
            return{
                ...state,
                numOfIcecream: state.numOfIcecream - 1 ,
            }
        default : return state
    }
}


//combine reducer

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream : icecreamReducer,
})

// Store 

const store = createStore(rootReducer)
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(()=>console.log("updated state", store.getState()))
store.dispatch({type : "buy_cake"}) //action
store.dispatch(buycake()) // action creator
store.dispatch({type : "buy_icecream"})
store.dispatch(buyicecream())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()
store.dispatch({type : "buy_cake"}) // after unsubscribe it stop to state changes will not call subscribe callback fn 