import { createStore } from "redux";
import reducer from "./stateManagement/reducer.js";
import WrappedComponent from "./stateManagement/WrappedComponent";
import { Provider } from "react-redux";

const store = createStore(reducer);

function App() {
  return <Provider store={store}><WrappedComponent /></Provider>;
}

export default App;