//  Private Section

let params = {};

//  Exposed Section

/* The code is defining an object named `GNDN` with three methods: `setParams`, `getParams`, and
`init`. */
const GNDN = {
  /** The `setParams` method is used to update the `params` object with new values. It takes an
   *   `newParams` object as a parameter and uses `Object.assign()` to merge the properties of
   *   `newParams` into the `params` object. If an error occurs during the assignment, it will be caught,
   *   logged to the console, and re-thrown as an error.
   *
   * @param {object} newParams
   */
  setParams: function (newParams) {
    try {
      Object.assign(params, newParams);
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  },

  /** The `getParams` method is an arrow function that returns the `params` object. It does not take any
   *    parameters.
   *
   * @returns {object} params;
   */
  getParams: () => params,

  /** The `writeResonseLocals` method is a function that returns another function. The returned function
   *    is a middleware function that can be used in an Express.js application.
   *
   * @returns {function(req,res,next)}
   */
  writeResonseLocals: (req, res, next) => {    
      try {
        res.locals.gndn = this.getParams();        
      } catch(e){
        console.error(e);
        res.locals.gndn = {};
      } finally{
        next();
      }
      
  },

  /**
   * The `sendResponseJSON` method is a function that takes two parameters: `req` and `res`. It is used
   *    to send a JSON response using the `res` object.
   *
   * @param {*} req
   * @param {*} res
   */
  sendResponseJSON: (req, res) => {
    res.JSON(this.getParams());
  },

  /** The `init` method is a function that takes an `initialParams` parameter. It is used to initialize
   *   the `params` object with the initial values provided.
   *
   * @param {*} initialParams
   */
  init: function (initialParams) {
    this.setParams(initialParams);
  }
  
};



export default GNDN;