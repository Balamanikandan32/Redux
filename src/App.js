import Cake from "./components/Cake";
import {Provider} from "react-redux";
import store from "./components/Redux/Cakes/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
      </div>
    </Provider>
  );
}

export default App;
