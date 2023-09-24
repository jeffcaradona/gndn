let params = {};

module.exports.getParams = () => params;
module.exports.setParams = (newParams) => {
  try {
    Object.assign(params, newParams);
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

module.exports.init = (newParams) => {
  this.setParams(newParams);
};
