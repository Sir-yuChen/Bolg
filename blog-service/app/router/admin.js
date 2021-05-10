module.exports = app => {
    const { router, controller } = app;
    router.get('/admin/getArticleTypeList', controller.admin.home.getArticleTypeList);
    router.post('/admin/addArticle', controller.admin.home.addArticle);
  };
  