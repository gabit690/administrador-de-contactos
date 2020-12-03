import { createStore } from "redux";
import rootReducer from "./stateManagement/reducer.js";
import WrappedAddForm from "./stateManagement/WrappedAddForm";
import WrappedContactList from "./stateManagement/WrappedContactList";
import { Provider } from "react-redux";
import "./App.css";

const store = createStore(rootReducer);

function App() {
  return (
    <div className="contenedor-app">
      <Provider store={store}>
        <WrappedAddForm />
        <WrappedContactList />
      </Provider>
    </div>);
}

export default App;