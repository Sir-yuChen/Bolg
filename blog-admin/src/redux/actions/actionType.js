
let actionTypes = {
    CHANGCONTENT: "changContent", //解析发布 文章markdown预览函数
    CHANGINTRODUCE: "changIntroduce", //解析发布 文章简介markdown预览函数
    CHANG_TITLE: "changTitle", //修改文章标题
    UPDATE_SELECTTYPE: "update_selectType", //所选文章类型
    UPDATE_RELEASETIME: "update_releaseTime", //发布时间
    UPDATE_RELEASEMODE: "update_releaseMode", //发布方式
    TEMPORARYARTICLE: "temporaryArticle", //暂存文章
    ADDARTICLE: "addarticle", //新增文章
    BREADCRUMBSPARAM:"breadcrumbsParam",//面包屑参数
}
export default actionTypes;
    