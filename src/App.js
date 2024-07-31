import Cake from "./components/Cake";
import {Provider} from "react-redux";
import store from "./components/Redux/Store"
import HookContainer from "./components/HookConatiner"
import IceCream from "./components/IceCream"
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookContainer />
        <Cake />
        <CakeContainer />
        <IceCream />
      </div>
    </Provider>
  );
}

export default App;
