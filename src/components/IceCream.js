import buyIcecream from "./Redux/IceCream/IcecreamAction"
import { connect } from "react-redux"

const IceCream = (props) => {
    return (
        <div>
            <h1>Number of Icecream - {props.numOfIcecream}</h1>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIcecream : state.icecream.numOfIcecream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream : () => dispatch(buyIcecream())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCream)