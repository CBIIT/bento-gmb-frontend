// eslint-disable-next-line import/prefer-default-export
export const utilities = {
  hasOwnProp: (obj, str) => {
    if (!obj || typeof obj === 'undefined' || !str || typeof str !== 'string' || str.length < 1) {
      return false;
    }

    return Object.prototype.hasOwnProperty.call(obj, str);
  },
};
