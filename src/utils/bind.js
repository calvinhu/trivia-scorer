/* eslint-disable no-param-reassign */
const _bind = (obj, ...methods) => {
  methods.forEach(method => { obj[method] = obj[method].bind(obj); });
};
/* eslint-enable no-param-reassign */
export default _bind;
