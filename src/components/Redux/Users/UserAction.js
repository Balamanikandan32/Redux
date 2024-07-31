import { FETCH_USER_REQUEST,FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./UsersType";

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
    }
}

export {fetchUserRequest, fetchUserSuccess, fetchUserFailure}