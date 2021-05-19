export let ipUrl = 'http://127.0.0.1:7001/admin/' 


let servicePath = {
    getArticleTypeList: 'getArticleTypeList/' ,  //  获取文章类型集合INFO
    addArticle : 'addArticle/', // 保存文章
    getAdminMenu : 'getAdminMenu/', // 获取菜单
    getAdminMenuByUrl:'getAdminMenuByUrl',//获取菜单信息通过url
    getNoticeInfoByUUid:'getNoticeInfoByUUid/',//获取通知信息
    getNoticeNum:'getNoticeNum', //通知数量
    updateNoticeNum:'updateNoticeNum', //修改通知为已读
    getDataNum:'getDataNum',
    geTlineChart:"geTlineChart",
    geTlineChart_type:'geTlineChart_type',
    getHotSearch:'getHotSearch',
    getNoticeInfo:'getNoticeInfo',
    getNumbByType:'getNumbByType',
    getTypeInfo:'getTypeInfo',
    getArticleInfo:'getArticleInfo',
    deleteArticle:'deleteArticle',
    updateTitleByUuid:'updateTitleByUuid',
}   
export default servicePath;
