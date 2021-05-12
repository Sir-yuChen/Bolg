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
    console.log(`获取参数uuid`,menu_uuid )

    return http.get(servicePath.getAdminMenu+"?menu_uuid="+menu_uuid)
}