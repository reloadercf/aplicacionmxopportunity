import {
  takeEvery, call, select, put,
} from 'redux-saga/effects';
import CONSTANTES from '../Const';
import { actionCargarPublicacionesStore, actionGetArticuloSlug, actionGetArticulo } from '../Actions';

const URL = 'https://www.mxplanb.xyz';

const ConsultaArticulos = () => {
  console.log('esta es mi llamada al servidor');
  return 'hola este es mi valor que retorno';
};

const ConsultaArticulosCategoria = categoria => fetch(`${URL}/article/articulofiltro/?q=${categoria.categoria}`,
  {
    method: 'GET',

  }).then(response => response.json());

const ConsultaArticuloSlug = slug => fetch(`${URL}/article/articulofiltro/?slug=${slug}`,
  {
    method: 'GET',
  }).then(response => response.json());


function* generadoraRegistro(values) {
  yield call(ConsultaArticulos);
  // console.log(values);
}

function* generadoraArticulosCategoria() {
  try {
    const categoria = yield select(state => state.reducerArticulos);
    const articlosCategoria = yield call(ConsultaArticulosCategoria, categoria);
    yield put(actionCargarPublicacionesStore(articlosCategoria));
    // console.log(articlosCategoria);
  } catch (error) {
    console.log(error);
  }
}


function* generadoraArticuloSlug() {
  try {
    const slug = yield select(state => state.reducerArticulos);
    const articlosCategoria = yield call(ConsultaArticuloSlug, slug);
    yield put(actionGetArticulo(articlosCategoria));
  } catch (error) {
    console.log(error);
  }
}


const descargarArticulos = () => fetch(`${URL}/article/articulofiltro/`,
  {
    method: 'GET',
  }).then(response => response.json());

function* generadoraArticulos() {
  try {
    const articulos = yield call(descargarArticulos);
    yield put(actionGetArticulo(articulos));
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTES.PRUEBA_UNO, generadoraRegistro);
  yield takeEvery(CONSTANTES.GET_ARTICULOS_CATEGORIA, generadoraArticulosCategoria);
  yield takeEvery(CONSTANTES.GET_ARTICULO_SLUG, generadoraArticuloSlug);
  yield takeEvery(CONSTANTES.GET_ARTICULOS, generadoraArticulos);
}
