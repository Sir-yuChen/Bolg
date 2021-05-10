let ipUrl = 'http://127.0.0.1:7001/admin/' 


let servicePath = {
    getArticleTypeList:ipUrl + 'getArticleTypeList/' ,  //  获取文章类型集合INFO
    addArticle : ipUrl + 'addArticle/', // 保存文章

}
export default servicePath;
