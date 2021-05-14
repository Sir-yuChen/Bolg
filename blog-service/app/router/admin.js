module.exports = app => {
    const { router, controller } = app;
    router.get('/admin/getArticleTypeList', controller.admin.home.getArticleTypeList);
    router.post('/admin/addArticle', controller.admin.home.addArticle);
    router.get('/admin/getAdminMenu', controller.admin.home.getAdminMenu);
    router.get('/admin/getAdminMenuByUrl', controller.admin.home.getAdminMenuByUrl);
    router.get('/admin/getNoticeInfoByUUid', controller.admin.home.getNoticeInfoByUUid);
    router.get('/admin/getNoticeNum',controller.admin.home.getNoticeNum)
    router.put('/admin/updateNoticeNum',controller.admin.home.updateNoticeNum)
  };
  