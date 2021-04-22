module.exports = app => {
    const { router, controller } = app;
    router.get('/default/index', controller.default.home.index);
    router.get('/default/getArticleList', controller.default.home.getArticleList);
    router.get('/default/getBlogInfo', controller.default.home.getBlogInfo);
    router.get('/default/getLearningPath', controller.default.home.getLearningPath);
  };
  