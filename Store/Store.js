import { createStore, combineReducers } from 'redux';
import CONSTANTES from './Const';


const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case CONSTANTES.PRUEBA_UNO:
      return [...state, 1];
    case CONSTANTES.PRUEBA_DOS:
      return [...state, 2];
    default:
      return state;
  }
};

const reducers = combineReducers({
  reducerPrueba,
});
const store = createStore(reducers);


export default store;
