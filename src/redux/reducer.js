import { combineReducers } from 'redux';
import { loginReducer} from './slices';

const rootReducer = combineReducers({
    login: loginReducer,
});

export default rootReducer;