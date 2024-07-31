import { connect } from "react-redux";
import buyCake from "./Redux/Cakes/CakeAction";
import { useState } from "react";

const CakeConatiner = (props) => {
    const [number,setNumber] = useState(1)
    return (
        <div style={{marginTop: "2rem"}}>
            <input name = "cakecontainer" value ={number} onChange={(event) => setNumber(event?.target?.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
        buyCake : (number) => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeConatiner); 