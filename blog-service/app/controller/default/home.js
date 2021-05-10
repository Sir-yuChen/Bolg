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

  let sql = 'SELECT  '+
              'e.*,'+
              'g.tag '+
            'FROM  '+
              '( '+
              'SELECT  '+
                'article_uuid,  '+
                'user_name,  '+
                'article_title,  '+
                'article_content,  '+
                'introduce,  '+
                'video_number,  '+
                'view_count,  '+
                'article_path,  '+
                'type_name,  '+
                "DATE_FORMAT( a.releaseTime, '%Y-%m-%d %H:%i:%s' ) AS releaseTime   "+
              'FROM  '+
                'blog_article a,  '+
                'blog_user u,  '+
                'blog_article_type b   '+
              'WHERE  '+
                'a.type_uuid = b.type_uuid   '+
                'AND a.article_authorUuid = u.user_uuid   '

      if (ctx.query.typePath != null && ctx.query.typePath != '' && ctx.query.typePath != '/' ) {
         sql += " and b.type_path ="+"'"+ctx.query.typePath+"'"
          console.log(`sql:===>`,sql )
      }

      sql += ') AS e  '+
              'LEFT JOIN (  '+
              'SELECT  '+
                'article_uuid,  '+
                "CONCAT('[',GROUP_CONCAT( JSON_OBJECT( 'tag_uuid', tag_uuid, 'tag_color', tag_color, 'tag_content', tag_content, 'tag_visible', tag_visible )),']') AS tag   "+
              'FROM  '+
                'blog_tag tg   '+
              'WHERE  '+
              'tg.article_uuid IN ( SELECT article_uuid FROM blog_article )   '+
              'GROUP BY  article_uuid  '+
              ') g ON e.article_uuid = g.article_uuid  '


      console.log(`sql:==查文章列表=>`,sql )
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
    console.log("------查文章详情---->>>>",res)
    ctx.body = {  
      data:res
    }
  }
  //查逼逼叨叨视频列表
  async getArticleList_Message(){
    const { ctx } = this;
    console.log(`文章类型`, ctx.query.typePath)
    
    let sql = 'SELECT '+
              'b.article_path, '+
              'b.article_title, '+
              'b.article_uuid, '+
              'b.article_cover  '+
            'FROM '+
              'blog_article b, '+
              'blog_article_type t  '+
            'WHERE '+
              'b.type_uuid = b.type_uuid  '+
              'AND t.type_path = '+"'"+ctx.query.typePath+"'"
      
    const res = await this.app.mysql.query(sql)
    console.log("------查逼逼叨叨视频列表---->>>>",res)
    ctx.body = {  
      data:res
    }
  }
  //查标签集合
  async getTagList(){
    const { ctx } = this;
    console.log(`标签位置`, ctx.query.site)
    
    
  let sql =  'SELECT '+
              't.tag_uuid , '+
              't.tag_color , '+
              't.tag_content , '+
              't.tag_visible '+
            'FROM '+
              'blog_tag t  '+
            'WHERE '+
              't.tag_site = '+"'"+ctx.query.site+"'"
      
    const res = await this.app.mysql.query(sql)
    console.log("------查标签集合---->>>>",res)
    ctx.body = {  
      data:res
    }
  }
  //查文章标签集合
  async getTagListByUUID(){
    const { ctx } = this;
    console.log(`标签所属文章UUID`, ctx.query.article_uuid)
    
    
  let sql =  'SELECT '+
              't.tag_uuid , '+
              't.tag_color , '+
              't.tag_content , '+
              't.tag_visible '+
            'FROM '+
              'blog_tag t  '+
            'WHERE '+
              't.article_uuid = '+"'"+ctx.query.article_uuid+"'"
      
    const res = await this.app.mysql.query(sql)
    console.log("------查标签集合---->>>>",res)
    ctx.body = {  
      data:res
    }
  }
}

module.exports = HomeController;