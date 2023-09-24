let params = {};
exports.init = (newParams) => {
  try{  
    Object.assign(params, newParams);
  }
  catch(e){
    console.error(e);
    throw new Error(e);
  }  
};
exports.getParams = () => params;
