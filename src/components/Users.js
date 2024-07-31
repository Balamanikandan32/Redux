import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchuser } from "./Redux/Users/UserReducer";
const Users = (props) => {
  const { loading, users, error } = props.users;
  useEffect(() => props.fetchuserAPI(), []);
  return (
    <div style={{ marginTop: "2rem" }}>
      {loading ? (
        <>loading</>
      ) : error ? (
        <>{props.users.error}</>
      ) : (
        <div>
          <h2>Userlist</h2>
          {
            users.map((user,index) => <li key = {index}>{user.name}</li>)
          }
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchuserAPI: () => dispatch(fetchuser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
