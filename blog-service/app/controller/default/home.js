'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let  result = await this.app.mysql.get("blog_content",{})//表名 条件
    ctx.body = result
    //mysql连接测试
  }
  //查文章列表
  async getArticleList(){

    let sql = 'SELECT '+
                'a.article_uuid,'+
                'u.user_name,'+
                'a.article_title,'+
                'a.article_content,'+
                'a.introduce,'+
                'a.video_number, '+
                'a.view_count, '+
                'b.type_name, '+
                "DATE_FORMAT(a.releaseTime,'%Y-%m-%d %H:%i:%s' ) as releaseTime "+
              'FROM '+
                'blog_article a,'+
                'blog_user u,'+
                'blog_article_type b '+
              'WHERE '+
                'a.type_uuid = b.type_uuid '+
                'and a.article_authorUuid = u.user_uuid '

      const res = await this.app.mysql.query(sql)
      this.ctx.body = {
        data:res
      }
  }

  //查博主个人信息
  async getBlogInfo(){
  
   let sql= 'SELECT '+
              '* '+
            'FROM '+
              'blog_user b '+
            'WHERE '+
              'b.STATUS = 1'
        const res = await this.app.mysql.query(sql)
        this.ctx.body = {
          data:res
        }
  }


}

module.exports = HomeController;