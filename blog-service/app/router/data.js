module.exports = app => {
    const { router, controller } = app;
    router.get('/admin/getDataNum', controller.admin.data.getDataNum);
    router.get('/admin/geTlineChart',controller.admin.data.geTlineChart);
    router.get('/admin/geTlineChart_type',controller.admin.data.geTlineChart_type);
    router.get('/admin/getHotSearch',controller.admin.data.getHotSearch);
    router.get('/admin/getNoticeInfo',controller.admin.data.getNoticeInfo);
    router.get('/admin/getNumbByType',controller.admin.data.getNumbByType);
    router.get('/admin/getTypeInfo',controller.admin.data.getTypeInfo);
    router.get('/admin/getArticleInfo',controller.admin.data.getArticleInfo);
    router.get('/admin/deleteArticle',controller.admin.data.deleteArticle);
    router.get('/admin/updateTitleByUuid',controller.admin.data.updateTitleByUuid)
  };
  