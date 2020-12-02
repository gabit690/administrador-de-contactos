import { createStore } from "redux";
import reducer from "./reducer.js";
import WrappedComponent from "./WrappedComponent";
import { Provider } from "react-redux";

const store = createStore(reducer);

function App() {
  return <Provider store={store}><WrappedComponent /></Provider>;
}

export default App;