// @flow

import variable from '../variables/platform';

export default (variables /* : * */ = variable) => {
  const thumbnailTheme = {
    '.square': {
      borderRadius: 0,
      '.small': {
        width: 30,
        height: 30,
        borderRadius: 0,
      },
      '.large': {
        width: 60,
        height: 60,
        borderRadius: 0,
      },
    },
    '.small': {
      width: 20,
      height: 20,
      borderRadius: 18,
      '.square': {
        borderRadius: 0,
      },
    },
    '.large': {
      width: 60,
      height: 60,
      borderRadius: 40,
      '.square': {
        borderRadius: 0,
      },
    },
    width: 46,
    height: 46,
    borderRadius: 28,
  };

  return thumbnailTheme;
};
