// @flow

import variable from '../variables/platform';

export default (variables /* : * */ = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    '.note': {
      color: '#222831',
      fontSize: variables.noteFontSize,
    },
    '.text_noticia': {
      color: '#222831',
      fontSize: variables.noteFontSize,
      letterSpacing: 1,
      textAlign: 'justify',

    },
    '.titulo_noticia': {
      color: '#ffff',
      fontSize: 14,
      letterSpacing: 1,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };

  return textTheme;
};
