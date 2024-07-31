import { BUY_CAKE } from "./CakeType"

const buyCake = (cake = 1) => {
    return {
        type : BUY_CAKE,
        payload: cake
    }
}

export default buyCake