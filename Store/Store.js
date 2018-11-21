import { createStore, combineReducers, applyMiddleware } from 'redux';
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

const miMiddleware = store => next => (action) => {
  console.log('Se ejecuta el middleware');
};
const reducers = combineReducers({
  reducerPrueba,
});
const store = createStore(reducers, applyMiddleware(miMiddleware));


export default store;
