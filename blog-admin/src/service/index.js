import http from '../utils/http.ts'
import servicePath from '../config/apiUrl'

//查文章类型
export const getArticleTypeList = ()=>{
    return http.get(servicePath.getArticleTypeList)
}
//新增文章接口
export const addarticle = (data) =>{
    return http.post(servicePath.addArticle, data, {
        headers: { successAlert: true }
      })
}
//获取菜单list
export const getAdminMenu = (menu_uuid)=>{
    return http.get(servicePath.getAdminMenu+"?menu_uuid="+menu_uuid)
}

//获取菜单信息根据url
export const getAdminMenuByUrl = (menu_url)=>{
    
    return http.get(servicePath.getAdminMenuByUrl+"?menu_url="+menu_url)
}

//获取通知
export const getNoticeInfoByUUid = (user_uuid)=>{
    
    return http.get(servicePath.getNoticeInfoByUUid+"?user_uuid="+user_uuid)
}
//获取通知数量
export const getNoticeNum   = (user_uuid)=>{
    return http.get(servicePath.getNoticeNum+"?user_uuid="+user_uuid)
}
//修改通知 为已读
export const updateNoticeNum   = (user_uuid)=>{
    return http.put(servicePath.updateNoticeNum+"?user_uuid="+user_uuid)
}