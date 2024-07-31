import { useDispatch, useSelector } from "react-redux";
import buyCake from "./CakeAction";

const HookContainer = () => {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num. of cakes -{numOfCakes}</h1>
            <button onClick={()=> dispatch(buyCake())}>buyCake</button>
        </div>
    )
}

export default HookContainer;