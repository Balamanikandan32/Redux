import { useDispatch, useSelector } from "react-redux";
import buyCake from "./Redux/Cakes/CakeAction"

const HookContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Num. of cakes (hook) -{numOfCakes}</h1>
            <button onClick={()=> dispatch(buyCake())}>buyCake</button>
        </div>
    )
}

export default HookContainer;