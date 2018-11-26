import CONSTANTES from './Const';

export const actionPruebaUno = () => ({
  type: CONSTANTES.PRUEBA_UNO,
});

export const actionPruebaDos = () => ({
  type: CONSTANTES.PRUEBA_DOS,
});

export const actionGetArticulos = () => ({
  type: CONSTANTES.GET_ARTICULOS,
});

export const actionCargarPublicacionesStore = articulos => ({
  type: CONSTANTES.AGREGAR_ARTICULOS_STORE,
  articulos,
});

export const actionGetArticulosCategoria = categoria => ({
  type: CONSTANTES.GET_ARTICULOS_CATEGORIA,
  categoria,
});


export const actionGetArticuloSlug = (articulo, slug) => ({
  type: CONSTANTES.GET_ARTICULO_SLUG,
  slug,
  articulo,
});

export const actionGetArticulo = articulo => ({
  type: CONSTANTES.GET_ARTICULO,
  articulo,
});
