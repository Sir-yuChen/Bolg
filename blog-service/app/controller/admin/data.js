'use strict';

const ControllerAdmin = require('egg').Controller;

class HomeController extends ControllerAdmin {
    
  //查文章数量，视频数量，网站点击量，评论数量
  async getDataNum(){
    const { ctx } = this;
    let sql =  'SELECT '+
                ' COUNT(1) as allArticle, '+
                    'sum(b.view_count) as allcount, '+
                    'SUM(b.video_number) as allVideoNumb '+
                'FROM '+
                ' blog_article b '
           
    console.log(`sql:=查文章数量，视频数量，网站点击量，评论数量=>`,sql )
    const dataNum = await this.app.mysql.query(sql)
      ctx.body = {
        data:dataNum
      }
  }

  ////获取折线图数据 每月文章数量，阅读量，视频数量
  async geTlineChart(){
    const { ctx } = this;
    let yearStr = ctx.query.yearStr
    console.log(`当前年份=====>`,yearStr )
    let sql =  
            'SELECT  '+
                'COUNT( 1 ) allArticle,  '+
                'SUM( b.view_count ) AS allViewCount,  '+
                'SUM( b.video_number ) AS allVideos,  '+
                'MONTH ( b.releaseTime ) AS months,  '+
                'YEAR ( b.releaseTime ) AS years   '+
            'FROM  '+
                'blog_article b   '+
            'GROUP BY  '+
                'months   '+
            'HAVING  '+
                "years = '"+yearStr+" ' "+
            'ORDER BY  '+
                'months'

    console.log(`sql:=获取折线图数据 每月文章数量，阅读量，视频数量=>`,sql )
    const data = await this.app.mysql.query(sql)
    ctx.body = {data:data}
  }
   //获取折线图数据 类型
   async geTlineChart_type(){
    const { ctx } = this;
    let yearStr = ctx.query.yearStr

    let sql =  
           ' SELECT   '+
             ' type_uuid,    '+
              'YEAR(b.releaseTime) AS years    '+
            'FROM   '+
              'blog_article b   '+
            'GROUP BY   '+
              'type_uuid    '+
            'HAVING   '+
              "years = '" +yearStr+"'"
           

    console.log(`sql:=获取折线图数据 类型=>`,sql )
    const data = await this.app.mysql.query(sql)
    ctx.body = {data:data}
  }

    //热搜榜
    async getHotSearch(){
      const { ctx } = this;
      let str = ctx.query.str
  
      let sql = 
              'SELECT  '+
                'b.article_title,  '+
                'b.article_uuid,  '+
                'b.view_count,  '+
                'b.video_number   '+
              'FROM  '+
                'blog_article b   '+
              'ORDER BY  '+
                " "+(str==1 ? 'b.view_count':'b.video_number')+" DESC   "+
                'LIMIT 10' 
            
             
      console.log(`sql:=热搜榜=>`,sql )
      const data = await this.app.mysql.query(sql)
      ctx.body = {data:data}
    }
    


    //获取 消息通知
  async getNoticeInfo(){
    const { ctx } = this;
    let user_uuid = ctx.query.user_uuid

    let sql = 
        'SELECT  '+
          'n.notice_title,  '+
          'n.notice_type,  '+
          'n.notice_uuid , '+
          " DATE_FORMAT(n.create_dateTime,'%Y-%m-%d %H:%i:%s' ) as create_dateTime "+
        'FROM  '+
          'blog_notice n   '+
        'WHERE  '+
          "n.user_uuid = '"+user_uuid+"' " +
          "ORDER BY "+
          " n.create_dateTime DESC"
            
    console.log(`sql:=获取 消息通知=>`,sql )
    const data = await this.app.mysql.query(sql)
    ctx.body = {data:data}
  }

  
    //获取每一种类型的文章数
    async getNumbByType(){
      const { ctx } = this;
  
      let sql = 'SELECT t.type_name,a.* FROM blog_article_type t,(SELECT COUNT(1) as number, b.type_uuid  FROM blog_article b GROUP BY b.type_uuid) a WHERE a.type_uuid =t.type_uuid'
              
      console.log(`sql:=获取每一种类型的文章数=>`,sql )
      const data = await this.app.mysql.query(sql)
      ctx.body = {data:data}
    }

    
    //获得文章类型
  async getTypeInfo(){
    const { ctx } = this;

    let sql = 'SELECT type_uuid,type_name FROM blog_article_type ORDER BY orders'

    console.log(`sql:=获得文章类型=>`,sql )
    const data = await this.app.mysql.query(sql)
    ctx.body = {data:data}
  }
  
   //条件查询 文章
  async getArticleInfo(){
      const { ctx } = this;
      let obj = ctx.query
      console.log(`获得查询`,obj )
  
      let sql =
              'SELECT  '+
                't.type_name,  '+
                't.type_uuid,  '+
                'u.user_name,  '+
                'b.article_status,  '+
                'b.article_title,  '+
                'b.article_uuid,  '+
                'b.releaseTime,  '+
                'b.video_number,  '+
                'b.view_count,  '+
                'b.tag_uuid   '+
              'FROM  '+
                'blog_article b,  '+
                'blog_article_type t,  '+
                'blog_user u   '+
              'WHERE  '+
                'u.user_uuid = b.article_authorUuid   '+
                'AND t.type_uuid = b.type_uuid   '
        if (obj.article_title != '') {
           sql += " AND b.article_title LIKE '%"+obj.article_title+"%'"
        }
        if (obj.type_uuid !='' && obj.type_uuid != undefined) {
            sql += " AND b.type_uuid = '"+obj.type_uuid+"' "
        }
        if (obj.startTime !='' && obj.endTime !='') {
           sql += "  AND DATE( b.releaseTime ) BETWEEN '"+obj.startTime+"'  AND '"+obj.endTime+"'"
        }       
  
      console.log(`sql:=条件查询 文章=>`,sql )
      const data = await this.app.mysql.query(sql)
      ctx.body = {data:data}
  }

}
module.exports = HomeController;