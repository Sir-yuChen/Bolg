export let ipUrl = 'http://127.0.0.1:7001/admin/' 


let servicePath = {
    getArticleTypeList: 'getArticleTypeList/' ,  //  获取文章类型集合INFO
    addArticle : 'addArticle/', // 保存文章
    getAdminMenu : 'getAdminMenu/', // 获取菜单
    getAdminMenuByUrl:'getAdminMenuByUrl',//获取菜单信息通过url
    getNoticeInfoByUUid:'getNoticeInfoByUUid/',//获取通知信息

}
export default servicePath;
