import { combineReducers } from "redux";
import movieReducer from "./slices/movieSlice";
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  movie: movieReducer,
  auth: authReducer,
});

export default rootReducer;
