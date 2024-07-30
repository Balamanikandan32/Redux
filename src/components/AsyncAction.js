import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const AsyncAction = () => {
  return <>asyncActions</>;
};
export default AsyncAction;

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}
function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
}
function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
}

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// redux thunk action creator it return another fn instaed of object
const fetchuser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>  response.json())
      .then((data) => dispatch(fetchUserSuccess(data)))
      .catch((error) => dispatch(fetchUserFailure(error)));
  };
};

const store = createStore(asyncReducer, applyMiddleware(thunk, logger));
const unsubscribe = store.subscribe(() => {
  const data = store.getState();
  data?.users?.map(item => console.log("user name is", item?.name))
});
store.dispatch(fetchuser());
