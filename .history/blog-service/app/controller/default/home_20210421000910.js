'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let  result = await this.app.mysql.get("blog_content",{})//表名 条件
    ctx.body = result
  }
}

module.exports = HomeController;