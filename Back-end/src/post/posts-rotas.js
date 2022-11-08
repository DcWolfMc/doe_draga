const postsControlador = require('./posts-controlador');

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista);

  app
    .route('/post_add')
    .post(postsControlador.adiciona);

  app
    .route('/post/:id')
    .get(postsControlador.busca_id);

  app
    .route('/post_delete/:id')
    .delete(postsControlador.deleta);

  app
    .route('/post_update/:id')
    .put(postsControlador.update);
};
