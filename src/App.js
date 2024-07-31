import Cake from "./components/Cake";
import {Provider} from "react-redux";
import store from "./components/Redux/Cakes/Store";
import HookContainer from "./components/Redux/Cakes/HookConatiner";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookContainer />
        <Cake />
      </div>
    </Provider>
  );
}

export default App;
