'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require("../app/router/default")(app)
};
