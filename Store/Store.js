import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import CONSTANTES from './Const';
import funcionPrimaria from './Sagas/Sagas';


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

const reducerArticulos = (state = {}, action) => {
  switch (action.type) {
    case CONSTANTES.AGREGAR_ARTICULOS_STORE:
      return { ...state, articulos: action.articulos };
    case CONSTANTES.GET_ARTICULOS_CATEGORIA:
      return { ...state, categoria: action.categoria };
    case CONSTANTES.GET_ARTICULO_SLUG:
      return { ...state, slug: action.slug };
    case CONSTANTES.GET_ARTICULO:
      return { ...state, articulo: action.articulo };
    default:
      return state;
  }
};


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerPrueba,
  reducerArticulos,
});
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);


export default store;
