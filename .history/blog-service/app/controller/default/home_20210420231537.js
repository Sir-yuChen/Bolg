'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg你好';
    this.ctx.body="api接口"
  }
}

module.exports = HomeController;