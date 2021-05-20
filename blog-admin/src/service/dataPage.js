import http from '../utils/http.ts'
import servicePath from '../config/apiUrl'

//查文章数量，视频数量，网站点击量，评论数量
export const getDataNum = ()=>{
    return http.get(servicePath.getDataNum)
}

//获取折线图数据 每月文章数量，阅读量，视频数量
export const geTlineChart = (yearStr)=>{
    return http.get(servicePath.geTlineChart+"?yearStr="+yearStr)
}
//获取折线图数据 类型
export const geTlineChart_type = (yearStr)=>{
    return http.get(servicePath.geTlineChart_type+"?yearStr="+yearStr)
}

//获取热搜榜前十
export const getHotSearch = (str)=>{
    return http.get(servicePath.getHotSearch+"?str="+str)
}

//获取 消息通知
export const getNoticeInfo =(user_uuid) =>{
    return http.get(servicePath.getNoticeInfo+"?user_uuid="+user_uuid)
}

//获取每一种类型的文章数
export const getNumbByType =() =>{
    return http.get(servicePath.getNumbByType)
}


///------------工作台相关接口-----------

//获得文章类型
export const getTypeInfo =() =>{
    return http.get(servicePath.getTypeInfo)
}
//条件查询 文章
export const getArticleInfo =(params) =>{
    // console.log(`obj===》`, obj)
    return http.get(servicePath.getArticleInfo,{
        params,
        headers: {
          errorAlert: false,
          cancelRequest: false
        }
      })
}

//删除文章 
export const deleteArticle = (article_uuid) =>{
    return http.get(servicePath.deleteArticle+"?article_uuid="+article_uuid)
}
//修改文章标题 
export const updateTitleByUuid = (params) =>{
    return http.get(servicePath.updateTitleByUuid,{params})
}


//获得文章类型
export const getArticleType = () =>{
    return http.get(servicePath.getArticleType)
}

//获得标签
export const getTagInfo = () =>{
    return http.get(servicePath.getTagInfo)
}

//修改标签颜色
export const updateTagColor =(params)=>{
    return http.get(servicePath.updateTagColor,{
        params,
        headers: {
          errorAlert: false,
          cancelRequest: false
        }
      })
}

//获得图标
export const getIconInfo = () =>{
    return http.get(servicePath.getIconInfo)
}