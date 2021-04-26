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

    const { ctx } = this;
    console.log(`文章类型：`,ctx.query.typePath)
    let sqls = ''

    let sql = 'SELECT '+
                'a.article_uuid,'+
                'u.user_name,'+
                'a.article_title,'+
                'a.article_content,'+
                'a.introduce,'+
                'a.video_number, '+
                'a.view_count, '+
                'a.article_path, '+
                'b.type_name, '+
                "DATE_FORMAT(a.releaseTime,'%Y-%m-%d %H:%i:%s' ) as releaseTime "+
              'FROM '+
                'blog_article a,'+
                'blog_user u,'+
                'blog_article_type b '+
              'WHERE '+
                'a.type_uuid = b.type_uuid '+
                'and a.article_authorUuid = u.user_uuid '
      if (ctx.query.typePath != null && ctx.query.typePath != '' && ctx.query.typePath != '/' ) {
         sql += " and b.type_path ="+"'"+ctx.query.typePath+"'"
          console.log(`sql:===>`,sql )
      }

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

  //查询学习路线
  async getLearningPath(){
    
    let sql = 'SELECT '+
              'b.path_name, '+
              'b.article_uuid, '+
              'b.subtitle,  '+
              'a.article_path  '+
            'FROM '+
              'blog_learningpath b,  '+
              'blog_article a  '+
            'WHERE '+
              'b.article_uuid = a.article_uuid  '+ 
              ' AND b.STATUS = 1 '
    const res = await this.app.mysql.query(sql)
    this.ctx.body = {
      data:res
    }
  }
  //查询顶部标题栏信息
  async getHeaderIndfo(){
  
  let sql = 'SELECT '+
            't.type_name, '+
            't.type_path, '+
            'i.type, '+
            't.keyName  '+
            'FROM '+
              'blog_article_type AS t , '+
              'blog_icon AS i  '+
            'WHERE '+
              't.STATUS = 1 '+
              'AND t.type_site = "header" '+
              'AND t.type_icon = i.icon_uuid '+
              'ORDER BY '+
                't.orders '

    const res = await this.app.mysql.query(sql)
    this.ctx.body = {
      data:res
    }
  }
  //查图标
  async getIconObj(){
    const { ctx } = this;
    // let sql = 'SELECT * FROM blog_icon b WHERE b.site ='+"'"+ctx.query.site+"'"
    let sql =  'SELECT JSON_OBJECTAGG(b.icon_name, b.type) as iconKV FROM blog_icon b WHERE b.site ='+"'"+ctx.query.site+"'"
    const res = await this.app.mysql.query(sql)
    // console.log("---------->>>>",res[0].iconKV)
    ctx.body = {
      data:res
    }
  }
  //查文章详情
  async getArticleById(){
    const { ctx } = this;
    console.log(`文章uuid：`, ctx.query.article_uuid)
    let sql = 'SELECT '+
                'b.article_uuid, '+
                'b.article_title, '+
                'b.article_content, '+
                "DATE_FORMAT(b.releaseTime,'%Y-%m-%d %H:%i:%s' ) as releaseTime ,"+
                'b.view_count, '+
                'b.video_number, '+
                'b.article_path, '+
                't.type_name,  '+
                't.type_path  '+
              'FROM '+
                'blog_article b, '+
                'blog_article_type t  '+
              'WHERE '+
                'article_uuid = '+"'"+ctx.query.article_uuid+"'"+
                'AND b.type_uuid = t.type_uuid '
   
    const res = await this.app.mysql.query(sql)
    console.log("---------->>>>",res)
    ctx.body = {  
      data:res
    }
  }
}

module.exports = HomeController;