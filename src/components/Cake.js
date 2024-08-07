import { connect } from "react-redux";
import buyCake from "./Redux/Cakes/CakeAction";

const Cake = (props) => {
    return (
        <div>
            <h1>Number of cakes( normal connect ) - {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cake); 