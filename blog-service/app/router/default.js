module.exports = app => {
    const { router, controller } = app;
    router.get('/default/index', controller.default.home.index);
    router.get('/default/getArticleList', controller.default.home.getArticleList);
    router.get('/default/getBlogInfo', controller.default.home.getBlogInfo);
    router.get('/default/getLearningPath', controller.default.home.getLearningPath);
    router.get('/default/getHeaderIndfo', controller.default.home.getHeaderIndfo);
    router.get('/default/getIconObj', controller.default.home.getIconObj);
    router.get('/default/getArticleById', controller.default.home.getArticleById);
    router.get('/default/getArticleList_Message', controller.default.home.getArticleList_Message);
    router.get('/default/getTagList', controller.default.home.getTagList);
    router.get('/default/getTagListByUUID', controller.default.home.getTagListByUUID);
  };
  