import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import TestComponent from "./components/TestComponent";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TestComponent />
      </div>
    </Provider>
  );
}
