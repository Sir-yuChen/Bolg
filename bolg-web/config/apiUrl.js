let ipUrl = 'http://127.0.0.1:7001/default/' 


let servicePath = {
    getArticleList:ipUrl + 'getArticleList/' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getBlogInfo:ipUrl + 'getBlogInfo/',  // 查博主信息
    getLearningPath:ipUrl + 'getLearningPath/',  // 查询学习路线
    getHeaderIndfo:ipUrl + 'getHeaderIndfo/',  // 查标题栏信息
    getIconObj:ipUrl + 'getIconObj',  // 查图标

}
export default servicePath;
