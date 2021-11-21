import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import MoviesReduce from "./Store/reduce/movies";

const store = createStore(MoviesReduce, applyMiddleware(thunk));

export default store;
