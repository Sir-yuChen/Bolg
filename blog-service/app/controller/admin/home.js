'use strict';

const ControllerAdmin = require('egg').Controller;

class HomeController extends ControllerAdmin {
  async getArticleTypeList() {
    const { ctx } = this;

    let sql = 'SELECT type_uuid,type_name,keyName FROM  blog_article_type WHERE status = 1 ORDER BY orders'

    const res = await this.app.mysql.query(sql)
   
    console.log(`sql:==查文章类型集合=>`,sql )
      const resAdmin = await this.app.mysql.query(sql)
      ctx.body = {
        data:resAdmin
      }
    }

    //保存文章
  async addArticle() {
    const { ctx } = this;
    let data = ctx.request.body
    console.log(`保存文章数据：`,ctx )
    
    let sql =
            'INSERT INTO blog_article (  '+
              'type_uuid, '+
              'article_title, '+
              'article_content, '+
              'introduce, '+
              'releaseTime, '+
              'view_count, '+
              'video_number,  '+
              'article_uuid,  '+
              'article_status,  '+
              'lastUpdateTime,  '+
              'article_authorUuid,  '+
              'article_path,  '+
              'article_cover   '+
            ')  '+
            'VALUES  '+
              '(  '+
                "'"+ data.selectType+"',  "+
                "'"+data.article_title+"',  "+
                "'"+data.article_content+"',  "+
                "'"+data.introduce+"',  "+
                "'"+data.releaseTime+"',  "+
                "0,  "+
                "0,  "+
                " REPLACE(UUID(), '-', ''),  "+
                "'"+data.article_status+"',  "+
                "SYSDATE(),  "+
                "'56sd54e56s254ds52',  "+
                "'http://localhost:3000/detailPages',  "+
              "'https://newimg.jspang.com/BBD64.jpg'   "+
              ")" +
              " RETURNING article_uuid "
   
    console.log(`sql:=保存文章信息=>`,sql )
    const result = await this.app.mysql.query(sql)
    const insertSuccess = result.affectedRows === 1
    console.log(`result`, result)
      ctx.body = {
        insertSuccess:insertSuccess,
        article_uuid:result.article_uuid
      }
  }

}
module.exports = HomeController;