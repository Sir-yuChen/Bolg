module.exports = app => {
    const { router, controller } = app;
    router.get('/default/index', controller.defaut.home.index);
  };
  