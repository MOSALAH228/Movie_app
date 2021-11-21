import { createStore } from "redux";
import Loader from "./reduce/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(Loader, composeWithDevTools());

export default store;
